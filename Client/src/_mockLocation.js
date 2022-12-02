import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.0001;

const getLocation = (increment) => {
    return {
        timestamp: 100000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            longitude: -90.0680 + increment * tenMetersWithDegrees,
            latitude: 30.0273 + increment * tenMetersWithDegrees
        }
    };
};

let counter = 20;
setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    });
    counter++;
}), 1000;