import React, {useState, useContext} from 'react'
import { useEffect } from 'react'
import {View, StyleSheet} from 'react-native'
import {Text, Button, Input} from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'

const friendScreen = () => {
    const {state, addFriend, getFriends} = useContext(AuthContext);
    const [otherEmail, setEmail] = useState('');
    const email = state.email;

    useEffect(() => {
        getFriends({email});
    }, []);

    const friendships = state.friendships;
    console.log(friendships);

    return <View style={styles.container}>
        <Spacer>
            <Text h3>Friends</Text>
        </Spacer>
        <Spacer/>
        <Input 
            autoCapitalize="none"
            autoCorrect={false}
            label="Add a friend's email"
            value={otherEmail}
            onChangeText={(newEmail) => {setEmail(newEmail)}}
        />
        <Spacer/>
            <Button title="Add Friend" onPress={() => {addFriend({email, otherEmail})}}/>
        <Spacer>
        <Spacer>
            <Text h3>Friends List:</Text>
        </Spacer>
            <Text h4>blahaj1@test.com</Text>
            <Text h4>blahaj2@test.com</Text>
            <Text h4>blahaj3@test.com</Text>
            <Text h4>blahaj4@test.com</Text>
            <Text h4>blahaj5@test.com</Text>
        </Spacer>
    </View>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    }
});

export default friendScreen;