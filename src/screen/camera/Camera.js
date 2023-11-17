import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Camera,
  useCameraDevice,
  useCameraDevices,
  useCameraPermission,
} from 'react-native-vision-camera';
import {useIsFocused} from '@react-navigation/native';
import Reanimated, {
  useAnimatedProps,
  useSharedValue,
  withSpring,
  addWhitelistedNativeProps,
} from 'react-native-reanimated';

const ReanimatedCamera = Reanimated.createAnimatedComponent(Camera);
Reanimated.addWhitelistedNativeProps({
  zoom: true,
});

const CameraPage = () => {
  const {hasPermission, requestPermission} = useCameraPermission();
  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }
  }, []);
  const devices = useCameraDevices();
  const [cameraSide, setCameraSide] = useState('back');
  const device = useCameraDevice(cameraSide, {
    physicalDevices: [
      'ultra-wide-angle-camera',
      'wide-angle-camera',
      'telephoto-camera',
    ],
  });
  const isFocused = useIsFocused();
  const cameraRef = useRef();
  const [capturedImage, setCapturedImage] = useState(false);
  const takePhoto = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePhoto({quality: 'high'});
      setCapturedImage(photo);
    }
  };
  const _changeCamera = () => {
    if (cameraSide === 'back') {
      setCameraSide('front');
    } else {
      setCameraSide('back');
    }
  };

  const zoom = useSharedValue(0);

  const onRandomZoomPress = useCallback(() => {
    zoom.value = withSpring(Math.random());
  }, [zoom]);

  //   const animatedProps = (useAnimatedProps ()=>()
  //     (() => ({zoom: zoom.value}), [zoom]));
  const animatedProps = useAnimatedProps(() => {
    return {zoom: zoom.value};
  }, [zoom]);

  return (
    <View style={{flex: 1}}>
      {device && (
        <ReanimatedCamera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={isFocused}
          ref={cameraRef}
          photo={true}
          captureAudio={false}
          hdr={true}
          focusable={true}
          enablezoomgesture={true}
          animatedProps={animatedProps}
        />
      )}
      <TouchableOpacity style={styles.zoomButton} onPress={onRandomZoomPress}>
        <Text>Zoom randomly!</Text>
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'flex-end',
          padding: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}>
          <Image
            source={{uri: `file://${capturedImage?.path}`}}
            style={{
              width: 40,
              height: 40,
              borderRadius: 40,
              borderWidth: 1,
              backgroundColor: '#0000005a',
            }}
          />
          <TouchableOpacity
            onPress={takePhoto}
            style={{
              borderWidth: 4,
              borderColor: '#fff',
              borderRadius: 50,
              height: 50,
              width: 50,
            }}
          />
          <TouchableOpacity onPress={_changeCamera}>
            <Image
              style={{
                height: 30,
                width: 30,
              }}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/2546/2546743.png',
              }}
              tintColor={'#fff'}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CameraPage;

const styles = StyleSheet.create({});
