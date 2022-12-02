import React, {useContext} from 'react'
import {View, StyleSheet} from 'react-native'
import {NavigationEvents} from 'react-navigation'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import {Context as AuthContext} from '../context/AuthContext'

const SignupScreen = (props) => {

    const {state, signup, clearErrorMessage} = useContext(AuthContext);

    return <View style={styles.container}>
        <NavigationEvents
            onWillFocus={() => {clearErrorMessage()}}
        />
        <AuthForm
            headerText="Sign up for Gym Buddies"
            errorMessage={state.errorMessage}
            submitButtonText="Sign Up"
            onSubmit={({email, password}) => signup({email, password})}
        />
        <NavLink
            routeName="Signin"
            text="Already have an account? Sign in!"
        />
    </View>
}

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    }
});

export default SignupScreen;