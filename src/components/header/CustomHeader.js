import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
const CustomHeader = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Icon name={'menu'} size={28} color={'#000'} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.profile_img}
          source={require('../../assets/images/profile1.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profile_img: {
    width: 34,
    height: 34,
    borderRadius: 30,
  },
});
