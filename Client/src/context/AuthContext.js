import AsyncStorage from '@react-native-async-storage/async-storage'
import createDataContext from "./createDataContext"
import trackerApi from '../api/tracker'
import {navigate} from '../navigationRef'

const authReducer = (state, action) => {
    switch(action.type){
        case 'add_error':
            return{...state, errorMessage: action.payload};
        case 'signup':
            return{errorMessage: '', token: action.payload, email: action.payload};
        case 'signin':
            return{errorMessage: '', token: action.payload, email: action.payload};
        case 'signout':
            return{token: null, email: null, errorMessage: ''};
        case 'clear_error_message':
            return{...state, errorMessage: ''};
        case 'getFriends':
            return{friendships: action.payload};
        default: state;
    }
}

const signup = (dispatch) => {
    return async ({email, password}) => {
        try{
            const response = await trackerApi.post('/signup', {email, password});
            //console.log(response.data);
            await AsyncStorage.setItem('token', response.data.token);
            await AsyncStorage.setItem('email', email);
            dispatch({type: 'signup', payload: response.data.token, payload: email});
            navigate('Workout');
        }
        catch(err){
            dispatch({type: 'add_error', payload: 'something went wrong with sign up'});
        }
    }
}

const signin = (dispatch) => {
    return async ({email, password}) => {
        try{
            const response = await trackerApi.post('/signin', {email, password});
            //console.log(response.data);
            await AsyncStorage.setItem('token', response.data.token);
            await AsyncStorage.setItem('email', email);
            dispatch({type: 'signin', payload: response.data.token, payload: email});
            navigate('Workout');
        }
        catch(err){
            dispatch({type: 'add_error', payload: 'something went wrong with sign in'});
        }
    }
}

const signout = (dispatch) => {
    return async () => {
        await AsyncStorage.removeItem('token');
        await AsyncStorage.removeItem('email');
        dispatch({type: 'signout'});
        navigate('loginFlow');
    }
}

const clearErrorMessage = (dispatch) => {
    return () => {
        dispatch({type: 'clear_error_message'});
    }
}

const tryLocalSignin = (dispatch) => {
    return async() => {
        const token = await AsyncStorage.getItem('token');
        const email = await AsyncStorage.getItem('email');
        if(token){
            dispatch({type: 'signin', payload: token, payload: email});
            navigate('Workout');
        }
        else{
            navigate('loginFlow');
        }
    }
}

const addFriend = (dispatch) => {
    return async ({email, otherEmail}) => {
        try{
            const token = await AsyncStorage.getItem('token');
            const email = await AsyncStorage.getItem('email');
            await trackerApi.post('/addFriend', {email, otherEmail});
            dispatch({type: 'signin', payload: token, payload: email});
        }
        catch(err){
            console.log("something")
        }
    }
}

const getFriends = (dispatch) => {
    return async ({email}) => {
        try{
            const token = await AsyncStorage.getItem('token');
            const email = await AsyncStorage.getItem('email');
            const response = await trackerApi.post('/getFriends', {email});
            console.log(response.data.friendships);
            dispatch({type: 'getFriends', payload: response.data.friendships, payload: token, payload: email});
        }
        catch(err){
            console.log(err);
        }
    }
}

export const {Provider, Context} = createDataContext(
    authReducer,
    {signin, signout, signup, clearErrorMessage, tryLocalSignin, addFriend, getFriends},
    {token: null, email: null, errorMessage: ''}
);