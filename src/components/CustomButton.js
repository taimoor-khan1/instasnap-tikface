import React from 'react';
import {Text, StyleSheet} from 'react-native';
import MyTouchableOpacity from './MyTouchableOpacity';
import {COLORS, FONTS, SIZES} from '../constants';
import Icon, {IconType} from './Icons';

export default function CommonButton(props) {
  const {
    title,
    btnStyle,
    titleStyle,
    onPress,
    disabled,
    hasBackArrow,
    mediumText,
  } = props;

  return (
    <MyTouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.container,
        btnStyle,
        {backgroundColor: disabled ? COLORS.gray : COLORS.primary},
      ]}>
      <Text
        style={[
          mediumText ? FONTS.mediumFont14 : FONTS.boldFont18,
          styles.textStyle,
          titleStyle,
        ]}>
        {title}
      </Text>
      {hasBackArrow && (
        <Icon
          name="right"
          type={IconType.AntDesign}
          size={SIZES.twenty}
          color={COLORS.white}
          style={styles.iconStyle}
        />
      )}
    </MyTouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: SIZES.fifteen * 1.3,
    borderRadius: SIZES.ten,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    paddingHorizontal: SIZES.twenty,
  },
  textStyle: {
    color: COLORS.white,
  },
  iconStyle: {
    right: SIZES.fifteen,
    position: 'absolute',
  },
});
