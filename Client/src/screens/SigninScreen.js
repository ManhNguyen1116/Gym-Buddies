import React, {useContext} from 'react'
import {View, StyleSheet} from 'react-native'
import {NavigationEvents} from 'react-navigation'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import {Context as AuthContext} from '../context/AuthContext'

const SigninScreen = (props) => {

    const {state, signin, clearErrorMessage} = useContext(AuthContext);

    return <View style={styles.container}>
        <NavigationEvents
            onWillFocus={() => {clearErrorMessage()}}
        />
        <AuthForm
            headerText="Sign In to Your Account"
            errorMessage={state.errorMessage}
            submitButtonText="Sign In"
            onSubmit={({email, password}) => signin({email, password})}
        />
        <NavLink
            routeName="Signup"
            text="Don't have an account yet? Sign up!"
        />
    </View>
}

SigninScreen.navigationOptions = () => {
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

export default SigninScreen;