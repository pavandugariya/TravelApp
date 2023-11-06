import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  PermissionsAndroid,
  StatusBar,
} from 'react-native';
import MapView, {Marker, Polygon} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const polygonCoordinates = [
  {latitude: 37.78825, longitude: -122.4324},
  {latitude: 37.7749, longitude: -122.4194},
  {latitude: 37.7749, longitude: -122.4089},
];

const MapScreen = () => {
  const [initialRegion, setInitialRegion] = useState(null);

  const [destination, setDestination] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setDestination({
        latitude: 22.75202336449619,
        longitude: 75.9015846685503,
      });
    }, 5000);
  }, []);

  useEffect(() => {
    // Get current location

    const getCurrentPosition = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          Geolocation.getCurrentPosition(
            position => {
              const {latitude, longitude} = position.coords;
              setInitialRegion({
                latitude,
                longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              });
            },
            error => console.log('Error getting current location:', error),
            {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
          );
        } else {
          console.log('Location permission denied');
        }
      } catch (error) {
        console.error('Error requesting location permission:', error);
      }
    };
    getCurrentPosition();
  }, []);

  const handlePlaceSelect = (data, details) => {
    console.log(details, 'details');
    const {lat: latitude, lng: longitude} = details.geometry.location;
    setDestination({latitude, longitude});
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={{height: 50}}>
        <GooglePlacesAutocomplete
          style={styles.searchBar}
          placeholder="Search Place"
          onPress={handlePlaceSelect}
          fetchDetails
          query={{
            key: 'AIzaSyCtO-bPqM8N9N4hn5CCZqdoDFR-vG-84Us',
            language: 'en',
          }}
        />
      </View>
      {initialRegion && (
        <MapView
          onPress={e => {
            setDestination(e.nativeEvent.coordinate);
            // console.log(e.nativeEvent.coordinate);
          }}
          showsUserLocation={true}
          userLocationAnnotationTitle="My Location"
          userLocationCalloutEnabled={true}
          style={styles.map}
          initialRegion={initialRegion}>
          {destination && (
            <Marker
              image={require('../../assets/images/profile1.png')}
              pinColor="#0037fd"
              coordinate={destination}
            />
          )}
          {destination && (
            <Polygon
              coordinates={[
                initialRegion,
                destination,
                {
                  latitude: 22.75202336449619,
                  longitude: 75.9015846685503,
                },
              ]}
              fillColor="rgba(0, 255, 0, 0.5)"
              strokeColor="rgba(0, 0, 255, 0.5)"
              strokeWidth={2}
            />
          )}
        </MapView>
      )}

      {destination && (
        <Text style={styles.distanceText}>
          Distance: {calculateDistance(initialRegion, destination).toFixed(2)}{' '}
          km
        </Text>
      )}
    </View>
  );
};

const calculateDistance = (start, end) => {
  const {latitude: lat1, longitude: lon1} = start;
  const {latitude: lat2, longitude: lon2} = end;
  const R = 6371; // Earth's radius in kilometers
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return distance;
};

const deg2rad = deg => {
  return deg * (Math.PI / 180);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  searchBar: {
    marginTop: 10,
    marginHorizontal: 10,
    color: '#000',
    borderWidth: 1,
    borderRadius: 10,
  },
  distanceText: {
    margin: 10,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});

export default MapScreen;
