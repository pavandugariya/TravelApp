import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  PermissionsAndroid,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {LineChart, PieChart} from 'react-native-chart-kit';
const width = Dimensions.get('window').width;
const data = [
  {
    name: 'Seoul',
    population: 21500000,
    color: 'rgba(131, 167, 234, 1)',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Toronto',
    population: 2800000,
    color: '#F00',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Beijing',
    population: 527612,
    color: 'red',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'New York',
    population: 8538000,
    color: '#ffffff',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Moscow',
    population: 11920000,
    color: 'rgb(0, 0, 255)',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
];

const chartConfig = {
  // backgroundColor: '#ffffff11',
  // backgroundGradientFrom: '#ffffff11',
  // backgroundGradientTo: '#ffffff11',
  backgroundGradientFrom: '#eed58e76',
  backgroundGradientTo: '#ff862276',
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  style: {
    borderRadius: 16,
  },
};

const WeatherScreen = () => {
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    const getCurrentPosition = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          Geolocation.getCurrentPosition(
            position => {
              const {latitude, longitude} = position.coords;
              getForecastData(latitude, longitude);
            },
            error => {
              console.error('Error getting current position:', error);
            },
            {
              enableHighAccuracy: true,
              timeout: 15000,
              maximumAge: 10000,
            },
          );
        } else {
          console.log('Location permission denied');
        }
      } catch (error) {
        console.error('Error requesting location permission:', error);
      }
    };

    const getForecastData = async (latitude, longitude) => {
      const apiKey = 'dad456569238b8584380e5d26f0e95bf'; // Replace with your actual API key

      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`,
        );
        const forecastData = await response.json();
        setForecast(forecastData);
      } catch (error) {
        console.error('Error fetching forecast data:', error);
      }
    };

    getCurrentPosition();
  }, []);

  const formatTemp = temperature => {
    const celsius = temperature - 273.15; // Convert from Kelvin to Celsius
    return `${Math.round(celsius)}°C`;
  };

  if (!forecast) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: '#000'}}>Loading forecast data...</Text>
      </View>
    );
  }
  console.log(forecast?.list[0]?.wind?.speed);

  return (
    <View style={{flex: 1}}>
      <LinearGradient colors={['#97a3d4', '#2f304b55']} style={{flex: 1}}>
        <ImageBackground
          source={{
            uri: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&q=80&w=1502&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          // source={{
          //   uri: 'https://images.unsplash.com/photo-1518022525094-218670c9b745?auto=format&fit=crop&q=80&w=1587&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          // }}
          style={[StyleSheet.absoluteFillObject, {paddingTop: 10}]}>
          <TouchableOpacity
            style={{
              position: 'absolute',
              padding: 5,
              borderRadius: 50,
              backgroundColor: '#7c8e8fda',
              right: 20,
              top: 20,
              elevation: 1,
            }}>
            <MaterialIcons name={'edit-location'} size={30} color={'#000'} />
          </TouchableOpacity>

          <View style={{alignItems: 'center', marginTop: 5}}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: 'bold',
                color: '#333333',
                marginVertical: 20,
              }}>
              {formatTemp(forecast.list[0].main.temp)}
            </Text>

            <Entypo name={'location'} size={30} color={'#000'} />
            <Text style={{fontSize: 18, color: '#000'}}>
              {forecast.city.name}
            </Text>
            <View
              style={{
                padding: 20,
                width: '90%',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: '#eec522',
                  fontWeight: 'bold',
                }}>
                <Icon name={'sunrise'} size={30} color={'#eec522'} />
                {'  '}
                {new Date(forecast.city.sunrise * 1000).toLocaleTimeString(
                  'en-US',
                )}
              </Text>

              <Text
                style={{
                  color: '#be5213',
                  fontWeight: 'bold',
                }}>
                <Icon name={'sunset'} size={30} color={'#be5213'} />
                {'  '}
                {new Date(forecast.city.sunset * 1000).toLocaleTimeString(
                  'en-US',
                )}
              </Text>
            </View>
            <Text
              style={{alignSelf: 'flex-end', marginRight: 20, color: '#fff'}}>
              Wind Speed {(forecast?.list[0]?.wind?.speed * 3.6).toFixed(3)}
              {'km/h'}
            </Text>
          </View>

          <ScrollView>
            <View style={{marginTop: 20}}>
              {forecast.list.slice(0, 15).map(item => (
                <View
                  key={item.dt}
                  style={{
                    marginHorizontal: 20,
                    marginBottom: 10,
                    padding: 16,
                    backgroundColor: 'white',
                    borderRadius: 10,
                  }}>
                  <Text
                    style={{fontSize: 16, fontWeight: 'bold', color: 'blue'}}>
                    {new Date(item.dt * 1000).toLocaleDateString('en-INR', {
                      weekday: 'short',
                    })}
                    {' - '}
                    {new Date(item.dt * 1000).toLocaleTimeString('en-US')}
                  </Text>
                  <Text style={{fontSize: 14, color: '#000'}}>
                    {formatTemp(item.main.temp_min)} /{' '}
                    {formatTemp(item.main.temp_max)}
                  </Text>
                </View>
              ))}
            </View>
          </ScrollView>
        </ImageBackground>
      </LinearGradient>
    </View>
  );
};

export default WeatherScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  currentWeatherContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forecastContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  location: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
    marginBottom: 10,
  },
  temperature: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'blue',
    marginBottom: 10,
  },
  conditions: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
  },
  forecastTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  forecast: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  day: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});
