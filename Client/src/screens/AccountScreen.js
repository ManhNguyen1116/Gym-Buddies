import React, {useContext} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {Button} from 'react-native-elements'
import Spacer from '../components/Spacer'
import {Context as AuthContext} from '../context/AuthContext'

const AccountScreen = () => {
    const {signout} = useContext(AuthContext);

    return <View style={styles.container}>
        <Text styles={{fontSize: 48}}>Account</Text>
        <Spacer>
            <Button title="Sign Out" onPress={() => {signout()}}/>
        </Spacer>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 100,
    }
});

export default AccountScreen;