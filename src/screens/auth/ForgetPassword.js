import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  EditText,
  IconType,
  CustomHeader,
  CommonButton,
  Row,
  MyTouchableOpacity,
} from '../../components';
import {
  COLORS,
  FONTFAMILY,
  FONTS,
  SCREENS,
  SIZES,
  STYLES,
} from '../../constants';

export default function ForgetPassword(props) {
  const {navigation} = props;
  return (
    <View style={STYLES.container}>
      <CustomHeader hasBackArrow />
      <Text style={[styles.heading, {marginTop: SIZES.twentyFive * 2}]}>
        Forget Password?
      </Text>

      <Text style={[styles.title]}>
        Enter your email & we will send you a verification code
      </Text>
      <View style={styles.container}>
        <EditText
          styleContainer={{marginTop: SIZES.twentyFive}}
          title="Email"
          placeholder={'Enter email'}
          hasIcon
          type={IconType.MaterialCommunityIcons}
          name={'email-outline'}
        />

        <CommonButton
          title="Contiune"
          hasBackArrow
          onPress={() => {
            navigation.navigate(SCREENS.Verification);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: SIZES.twenty,
    justifyContent: 'space-around',
  },
  heading: {
    alignSelf: 'center',
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.twentyFive,
    color: COLORS.black,
  },
  title: {
    alignSelf: 'center',
    textAlign: 'center',
    paddingHorizontal: SIZES.twenty,
    fontFamily: FONTFAMILY.Medium,
    marginVertical: SIZES.fifteen,
    color: COLORS.black,
  },
});
