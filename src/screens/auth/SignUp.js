import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {
  EditText,
  IconType,
  CustomHeader,
  CommonButton,
  Row,
  MyTouchableOpacity,
  Icon,
} from '../../components';
import {
  COLORS,
  FONTFAMILY,
  FONTS,
  SCREENS,
  SIZES,
  STYLES,
  width,
} from '../../constants';
import PhoneInput from 'react-native-phone-number-input';

export default function SignUp(props) {
  const {navigation} = props;
  const phoneInputRef = useRef(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phoneInput, setPhoneInput] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [isAgreeChecked, setIsAgreeChecked] = useState(false);

  const _toggleIsAgreeChecked = () => {
    setIsAgreeChecked(!isAgreeChecked);
  };
  const onSelect = country => {
    console.log('country.callingCode[0], ', country.callingCode[0]);
    setPhoneInput(
      !country.callingCode[0].includes('+')
        ? `+${country.callingCode[0]}`
        : country.callingCode[0],
    );
  };

  return (
    <View style={STYLES.container}>
      <CustomHeader hasBackArrow style={{marginBottom: SIZES.ten}} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        overScrollMode={'never'}
        contentContainerStyle={{flexGrow: 1}}>
        <Text style={[styles.heading, {marginTop: SIZES.twentyFive * 1.5}]}>
          Sign Up to
        </Text>
        <Text style={[styles.heading]}>InstaSnapTikFace</Text>
        <Text style={[styles.title]}>Enter you details below</Text>
        <View style={styles.container}>
          <EditText
            title="Full Name"
            placeholder={'Enter Your full name'}
            hasIcon
            type={IconType.MaterialCommunityIcons}
            name={'email-outline'}
          />
          <EditText
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
              marginTop: SIZES.ten,
            }}>
            Phone No
          </Text>
          <PhoneInput
            ref={phoneInputRef}
            defaultCode="US"
            layout="second"
            defaultValue={phoneInput}
            onChangeCountry={onSelect}
            autoFocus={false}
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
          <EditText
            styleContainer={{marginTop: SIZES.twenty}}
            title="Password"
            placeholder={'Enter Password'}
            hasIcon
            type={IconType.MaterialIcons}
            name={'lock-open'}
            password
          />
          <EditText
            styleContainer={{marginTop: SIZES.twenty}}
            title="Password"
            placeholder={'Re type your Password'}
            hasIcon
            type={IconType.MaterialIcons}
            name={'lock-open'}
            password
          />
          <MyTouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: SIZES.fifteen,
            }}
            onPress={() => {
              _toggleIsAgreeChecked();
            }}>
            <Icon
              type={IconType.Ionicons}
              name={
                isAgreeChecked ? 'ios-checkbox-outline' : 'ios-square-outline'
              }
              size={25}
              color={COLORS.primary}
            />
            <Row>
              <Text
                style={[
                  FONTS.mediumFont10,
                  {
                    color: COLORS.textGrey,
                    marginStart: SIZES.five,
                    maxWidth: width * 0.75,
                  },
                ]}>
                I am Agree to
              </Text>
              <MyTouchableOpacity
                onPress={() => {
                  navigation.navigate(SCREENS.TermsAndCondition);
                }}>
                <Text
                  style={[
                    FONTS.mediumFont10,
                    {
                      color: COLORS.primary,
                      marginStart: SIZES.five,
                      maxWidth: width * 0.75,
                    },
                  ]}>
                  Terms & Condition
                </Text>
              </MyTouchableOpacity>

              <Text
                style={[
                  FONTS.mediumFont10,
                  {
                    color: COLORS.textGrey,
                    marginStart: SIZES.five,
                    maxWidth: width * 0.75,
                  },
                ]}>
                of
              </Text>
              <MyTouchableOpacity
                onPress={() => navigation.navigate(SCREENS.AboutApp)}>
                <Text
                  style={[
                    FONTS.mediumFont10,
                    {
                      color: COLORS.primary,
                      marginStart: SIZES.five,
                      maxWidth: width * 0.75,
                    },
                  ]}>
                  InstaSnapTikFace
                </Text>
              </MyTouchableOpacity>
            </Row>
          </MyTouchableOpacity>
          <CommonButton
            btnStyle={{marginVertical: SIZES.twentyFive * 2}}
            title="Sign Up"
            hasBackArrow
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: SIZES.twenty,
  },
  heading: {
    alignSelf: 'center',
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.twentyFive,
    color: COLORS.black,
  },
  title: {
    alignSelf: 'center',
    marginVertical: SIZES.fifteen,
  },
});
