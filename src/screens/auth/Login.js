import {StyleSheet, Text, View, ScrollView} from 'react-native';
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

export default function Login(props) {
  const {navigation} = props;
  return (
    <View style={STYLES.container}>
      <CustomHeader hasBackArrow />
      <Text style={[styles.heading, {marginTop: SIZES.twentyFive * 2}]}>
        Log in to
      </Text>
      <Text style={[styles.heading]}>InstaSnapTikFace</Text>
      <Text style={[styles.title]}>Enter you details below</Text>
      <ScrollView contentContainerStyle={styles.container}>
        <EditText
          title="Username or Email"
          placeholder={'Enter email'}
          hasIcon
          type={IconType.MaterialCommunityIcons}
          name={'email-outline'}
        />
        <EditText
          styleContainer={{marginTop: SIZES.twentyFive}}
          title="Password"
          ForgetPassword="Forget Password?"
          placeholder={'Password'}
          hasIcon
          type={IconType.MaterialIcons}
          name={'lock-open'}
          password
        />
        <CommonButton
          btnStyle={{marginTop: SIZES.twentyFive * 2}}
          title="Sign in"
          onPress={() => navigation.navigate(SCREENS.BottomBar)}
          hasBackArrow
        />
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <Row style={styles.footer}>
            <Text style={styles.foortertext}>Not A member?</Text>
            <MyTouchableOpacity
              onPress={() => navigation.navigate(SCREENS.SignUp)}>
              <Text style={[styles.foortertext, {color: COLORS.primary}]}>
                Create a Account
              </Text>
            </MyTouchableOpacity>
          </Row>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
    color: COLORS.black,
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: SIZES.twenty,
    // alignContent: 'flex-end',
  },
  foortertext: {
    fontSize: SIZES.fifteen,
    fontFamily: FONTFAMILY.Medium,
    color: COLORS.black,
  },
});
