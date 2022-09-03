import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {IMAGES, width} from '../constants';

export default function CircleImage(props) {
  return (
    <View style={[styles.imageContainer, props.style]}>
      <Image source={IMAGES.user} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    height: width * 0.15,
    width: width * 0.15,
    borderRadius: width,
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: width,
  },
});
