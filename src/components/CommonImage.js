import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {COLORS, IMAGES, SIZES, width} from '../constants';

export default function CommonImage() {
  return (
    <View style={styles.container}>
      <Image
        source={IMAGES.user}
        style={styles.styleImage}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  styleImage: {
    width: '90%',
    height: '90%',
  },
  container: {
    width: SIZES.twenty * 5,
    height: SIZES.twenty * 5,
    backgroundColor: COLORS.primary,
    borderWidth: 2,
    borderColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: width,
  },
});
