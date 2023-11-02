import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CustomHeader} from '../../components';

const Home = () => {
  return (
    <View style={styles.container}>
      <CustomHeader />
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
});
