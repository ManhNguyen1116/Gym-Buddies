import React from 'react'
import {View, StyleSheet, Text, Button} from 'react-native'

const TrackListScreen = (props) => {
    return <>
        <Text styles={{fontSize: 48}}>TrackListScreen</Text>
        <Button title="Go to Track Detail" onPress={() => {props.navigation.navigate("TrackDetail")}}/>
    </>
}

const styles = StyleSheet.create({});

export default TrackListScreen;