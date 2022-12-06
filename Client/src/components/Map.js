import React from 'react';
import {StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

const Map = () => {

    return <MapView style={styles.map}
                initialRegion={{
                    latitude: 30.0273,
                    longitude: -90.0680,
                    latitudeDelta: 0.01,
                    longitudeData: 0.01,
                }}
                showsUserLocation={true}
    >
    </MapView>
};

const styles = StyleSheet.create({
    map:{
        ...StyleSheet.absoluteFillObject
    }
});

export default Map;