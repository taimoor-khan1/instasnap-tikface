import React from 'react';
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Animated,
  Image,
  Platform,
} from 'react-native';
import {COLORS, IMAGES, SIZES, width} from '../constants';
import Icon, {IconType} from './Icons';

export default class AddButton extends React.Component {
  mode = new Animated.Value(0);
  buttonSize = new Animated.Value(1);

  handlePress = () => {
    Animated.sequence([
      Animated.timing(this.buttonSize, {
        toValue: 0.95,
        duration: 10,
        useNativeDriver: false,
      }),
      Animated.timing(this.buttonSize, {
        toValue: 1,
        useNativeDriver: false,
      }),
      Animated.timing(this.mode, {
        toValue: this.mode._value === 0 ? 1 : 0,
        useNativeDriver: false,
      }),
    ]).start();
  };

  render() {
    const thermometerX = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [5, -30],
    });

    const thermometerY = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: Platform.OS === 'android' ? [-5, -60] : [5, -60],
    });

    const pulseX = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [5, 50],
    });

    const pulseY = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: Platform.OS === 'android' ? [-5, -60] : [5, -60],
    });

    const rotation = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '45deg'],
    });

    const sizeStyle = {
      transform: [{scale: this.buttonSize}],
    };

    return (
      <View style={{position: 'absolute', alignItems: 'center'}}>
        <Animated.View
          style={{position: 'absolute', left: thermometerX, top: thermometerY}}>
          <View style={styles.secondaryButton}>
            <Image
              source={IMAGES.IconGallery}
              style={{
                height: SIZES.twentyFive,
                width: SIZES.twentyFive,
                tintColor: COLORS.gray,
              }}
              resizeMode={'contain'}
            />
          </View>
        </Animated.View>
        {/* <Animated.View style={{position: 'absolute', left: timeX, top: timeY}}>
          <View style={styles.secondaryButton}>
            <Icon
              type={IconType.Feather}
              name="clock"
              size={24}
              color={COLORS.black}
            />
          </View>
        </Animated.View> */}
        <Animated.View
          style={{
            position: 'absolute',
            left: pulseX,
            top: pulseY,
          }}>
          <View style={styles.secondaryButton}>
            <Icon
              type={IconType.Feather}
              name="video"
              size={SIZES.twentyFive}
              color={COLORS.gray}
            />
          </View>
        </Animated.View>
        <TouchableHighlight
          activeOpacity={1}
          onPress={this.handlePress}
          underlayColor={COLORS.transparent}>
          <Animated.View style={[styles.button, sizeStyle]}>
            <Animated.View style={{transform: [{rotate: rotation}]}}>
              <Icon
                type={IconType.Feather}
                name="plus"
                size={SIZES.twentyFive * 1.3}
                color={COLORS.white}
              />
            </Animated.View>
          </Animated.View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Platform.OS === 'android' ? SIZES.fifty * 1.15 : SIZES.fifty,
    height: Platform.OS === 'android' ? SIZES.fifty * 1.15 : SIZES.fifty,
    borderRadius: width,
    backgroundColor: COLORS.primary,
    marginTop: Platform.OS === 'android' ? -SIZES.twenty : 0,
    shadowColor: COLORS.primary,
    shadowRadius: 5,
    shadowOffset: {height: SIZES.ten},
    elevation: 10,
    shadowOpacity: 0.15,
    borderWidth: 2,
    borderColor: COLORS.white,
  },
  secondaryButton: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    // width: SIZES.twentyFive * 1.6,
    // height: SIZES.twentyFive * 1.6,
    borderWidth: 1,
    borderRadius: width,
    backgroundColor: COLORS.transparent,
    borderColor: COLORS.primary,
    padding: SIZES.ten * 1.15,
  },
});
