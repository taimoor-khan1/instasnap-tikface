import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MyTouchableOpacity from './MyTouchableOpacity';
import {COLORS, FONTS, SIZES} from '../constants';
import Icon, {IconType} from './Icons';

export default function IconButton(props) {
  const {
    title,
    iconName,
    iconType,
    iconColor,
    onPress,
    style,
    mediumText,
    rotateIcon,
  } = props;
  return (
    <MyTouchableOpacity
      style={[styles.scoialLoginBtn, style]}
      onPress={onPress}>
      <Icon
        name={iconName}
        type={iconType}
        color={iconColor}
        size={SIZES.twentyFive}
        style={{
          transform: [
            {
              rotateY: rotateIcon ? '-180deg' : '0deg',
            },
          ],
        }}
      />
      <Text
        style={[
          mediumText ? FONTS.mediumFont14 : FONTS.boldFont18,
          {marginHorizontal: SIZES.twenty, color: COLORS.black},
        ]}>
        {title}
      </Text>
    </MyTouchableOpacity>
  );
}

const styles = StyleSheet.create({
  scoialLoginBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: SIZES.ten,
    paddingVertical: SIZES.fifteen,
    // height: SIZES.twenty * 3,
    marginTop: SIZES.twentyFive,
    paddingHorizontal: SIZES.twenty,
  },
});
