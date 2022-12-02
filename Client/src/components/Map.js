import React from 'react';
import {Text, StyleSheet} from 'react-native';
import MapView, {Polyline} from 'react-native-maps';

const Map = () => {

    let points = [];
    for(let i = 0; i < 20; i++){
        points.push({
            latitude: 30.0273 + i * 0.01,
            longitude: -90.0680 + i * 0.001
        })
    }

    return <MapView style={styles.map}
                initialRegion={{
                    latitude: 30.0273,
                    longitude: -90.0680,
                    latitudeDelta: 0.01,
                    longitudeData: 0.01,
                }}
    >
        <Polyline coordinates={points}/>
    </MapView>
};

const styles = StyleSheet.create({
    map:{
        ...StyleSheet.absoluteFillObject
    }
});

export default Map;