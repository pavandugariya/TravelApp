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
import {useNavigation} from '@react-navigation/native';
const BackHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name={'arrow-back-outline'} size={28} color={'#000'} />
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

export default BackHeader;

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
