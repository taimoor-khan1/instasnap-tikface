import {StyleSheet, Text, View, ScrollView, StatusBar} from 'react-native';
import React, {useState, useRef} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import CommonImage from '../../components/CommonImage';
import {COLORS, FONTFAMILY, FONTS, SIZES} from '../../constants';
import {
  CommonButton,
  CustomHeader,
  EditText,
  IconType,
  MyTouchableOpacity,
} from '../../components';
import PhoneInput from 'react-native-phone-number-input';

export default function EditProfile() {
  const phoneInputRef = useRef(null);
  const [phoneInput, setPhoneInput] = useState('');

  const onSelect = country => {
    console.log('country.callingCode[0], ', country.callingCode[0]);
    setPhoneInput(
      !country.callingCode[0].includes('+')
        ? `+${country.callingCode[0]}`
        : country.callingCode[0],
    );
  };

  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={['#f2a74f', '#ef692d']}
        start={{x: 0, y: 0.2}}
        end={{x: 0.5, y: 0.8}}
        locations={[0, 0.9, 0.8]}
        style={styles.header}>
        <CustomHeader hasBackArrow iconColor={COLORS.white} />
        <View style={{alignItems: 'center'}}>
          <CommonImage />
          <Text
            style={[
              FONTS.boldFont22,
              {color: COLORS.white, marginTop: SIZES.ten},
            ]}>
            John Deen
          </Text>
          <Text
            style={[
              FONTS.mediumFont14,
              {color: COLORS.white, marginVertical: SIZES.five},
            ]}>
            johndeen@gmail.com
          </Text>
          <Text
            style={[
              FONTS.mediumFont14,
              {color: COLORS.white, marginBottom: SIZES.twentyFive},
            ]}>
            +1(546) 542 345 20
          </Text>
        </View>
      </LinearGradient>
      <ScrollView
        showsVerticalScrollIndicator={false}
        overScrollMode={'never'}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: SIZES.twenty,
        }}>
        <EditText
          styleContainer={{marginTop: SIZES.twentyFive}}
          title="Full Name"
          placeholder={'Enter Your full name'}
          hasIcon
          type={IconType.MaterialCommunityIcons}
          name={'email-outline'}
        />
        <EditText
          styleContainer={{marginTop: SIZES.twentyFive}}
          title="Email Address"
          placeholder={'Enter your email'}
          hasIcon
          type={IconType.MaterialCommunityIcons}
          name={'email-outline'}
        />
        <Text
          style={{
            color: COLORS.black,
            fontSize: SIZES.fifteen,
            fontFamily: FONTFAMILY.Medium,
            marginTop: SIZES.twenty,
          }}>
          Phone No
        </Text>
        <PhoneInput
          ref={phoneInputRef}
          defaultCode="US"
          layout="second"
          defaultValue={phoneInput}
          onChangeCountry={onSelect}
          onChangeText={text => {
            setPhoneInput(text);
          }}
          textInputStyle={{padding: 0}}
          countryPickerButtonStyle={{
            borderRadius: SIZES.fifty,
          }}
          textContainerStyle={{
            borderRadius: SIZES.fifty,

            backgroundColor: COLORS.transparent,
          }}
          containerStyle={{
            height: SIZES.fifty,
            width: '100%',
            borderRadius: SIZES.ten,
            borderWidth: 1.5,
            borderColor: COLORS.gray,
            backgroundColor: COLORS.transparent,
            marginTop: SIZES.ten,
          }}
        />
        {phoneInput !== '' &&
          !phoneInputRef.current?.isValidNumber(phoneInput) && (
            <Text
              style={[
                FONTS.mediumFont12,
                {
                  color: 'red',
                  fontSize: SIZES.body10,
                  margin: SIZES.five,
                },
              ]}>
              Invalid phone number
            </Text>
          )}

        <MyTouchableOpacity
          style={{
            marginTop: SIZES.twenty,
            alignSelf: 'baseline',
            alignSelf: 'center',
            paddingVertical: SIZES.ten,
            paddingHorizontal: SIZES.ten,
          }}>
          <Text
            style={{
              color: COLORS.primary,
            }}>
            Change Password
          </Text>
        </MyTouchableOpacity>
        {/* <EditText
          styleContainer={{marginTop: SIZES.twenty}}
          title="Password"
          placeholder={'Enter Password'}
          hasIcon
          type={IconType.MaterialIcons}
          name={'lock-open'}
          password
        /> */}
        <CommonButton
          btnStyle={{marginVertical: SIZES.twentyFive * 1.5}}
          title="Save & Continue"
          hasBackArrow
          disabled={!phoneInputRef.current?.isValidNumber(phoneInput)}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    borderBottomLeftRadius: SIZES.twenty,
    borderBottomRightRadius: SIZES.twenty,
  },
});
