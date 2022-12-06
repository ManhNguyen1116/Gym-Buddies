//import "../_mockLocation"
import React, {useEffect, useState} from 'react'
import {StyleSheet, View} from 'react-native'
import Map from '../components/Map'
import {Text} from 'react-native-elements'
import {requestForegroundPermissionsAsync} from 'expo-location';

const TrackCreateScreen = () => {

    const [err, setErr] = useState(null);

    const startWatching = async () => {
        try{
            const {granted} = await requestForegroundPermissionsAsync();
            if(!granted){
                throw new Error('Location permission not granted');
            }
        }
        catch(e){
            setErr(e);
        }
    };

    useEffect(() => {
        startWatching();
    }, [])

    return <View style={styles.container}>
        <Text h3>TrackCreateScreen</Text>
        <Map />
        {err ? <Text>Please enable location services</Text> : null}
    </View>
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject
    }
});

export default TrackCreateScreen;