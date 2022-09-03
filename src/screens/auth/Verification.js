import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {CustomHeader, CommonButton} from '../../components';
import {
  COLORS,
  FONTFAMILY,
  FONTS,
  SCREENS,
  SIZES,
  STYLES,
} from '../../constants';

export default function Verification(props) {
  const {navigation} = props;
  const [code, setcode] = useState();
  const inputRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      inputRef?.current?.focusField(0);
    }, 500);
  }, []);

  return (
    <View style={STYLES.container}>
      <CustomHeader hasBackArrow />

      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.twenty,
        }}>
        <Text
          style={[
            {
              fontFamily: FONTFAMILY.Bold,
              fontSize: SIZES.twentyFive * 1.1,
              color: COLORS.black,
              textAlign: 'center',
              marginTop: SIZES.twentyFive * 1.3,
            },
          ]}>
          Verification
        </Text>

        <Text
          style={[
            FONTS.mediumFont14,
            {
              alignSelf: 'center',
              textAlign: 'center',
              paddingHorizontal: SIZES.twenty,
              fontFamily: FONTFAMILY.Medium,
              marginVertical: SIZES.fifteen,
              color: COLORS.black,
            },
          ]}>
          Enter your email & we will send you a verification code
        </Text>

        <View style={{paddingTop: SIZES.twentyFive * 1.45}}>
          <OTPInputView
            code={code}
            pinCount={4}
            ref={inputRef}
            onCodeChanged={setcode}
            autoFocusOnLoad={false}
            codeInputFieldStyle={styles.otp}
            codeInputHighlightStyle={styles.otp}
            style={styles.container}
          />
        </View>

        <CommonButton
          btnStyle={{marginTop: SIZES.twentyFive * 2}}
          title="Verify"
          onPress={() => navigation.navigate(SCREENS.Login)}
          hasBackArrow
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  otp: {
    borderRadius: SIZES.fifteen,
    height: SIZES.twenty * 3,
    width: SIZES.twenty * 3,
    fontSize: SIZES.twenty,
    fontFamily: FONTFAMILY.Medium,
    color: COLORS.black,
    backgroundColor: COLORS.white,
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  container: {
    width: '95%',
    height: SIZES.twentyFive * 6,
    marginBottom: SIZES.fifty,
    alignSelf: 'center',
  },
});
