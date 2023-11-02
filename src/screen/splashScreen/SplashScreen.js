import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, useTheme} from '../../context';
import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = () => {
  const {toggleTheme} = useTheme();
  console.log(colors);
  const styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text_style: {
      color: colors.textWhite,
      fontSize: 33,
    },
  });
  return (
    <LinearGradient
      start={{x: 0.0, y: 0.25}}
      end={{x: 0.5, y: 1.0}}
      locations={[0, 0.5]}
      colors={[colors.linearFColor, colors.linearSColor]}
      style={styles.linearGradient}>
      <TouchableOpacity onPress={() => toggleTheme()}>
        <Text style={[styles.text_style]}>ExploreMate</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default SplashScreen;
