import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from '../constants';

import {
  Login,
  SignUp,
  ForgetPassword,
  Verification,
  Splash,
} from '../screens/auth';
import {AboutApp, TermsAndCondition} from '../screens/content';
import {Notification, NotificationSettings} from '../screens/notification';
import {EditProfile} from '../screens/profile';
import More from '../screens/more/More';
import BottomBar from './bottomBar/BottomBar';
import {EditPhoto} from '../screens/gallery';
import CreatePost from '../screens/gallery/CreatePost';

import Loader from '../components/Modals/Loader';
const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
  animation: 'slide_from_right',
};
export default function () {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={screenOptions}
        initialRouteName={SCREENS.Splash}>
        <Stack.Screen name={SCREENS.Login} component={Login} />
        <Stack.Screen name={SCREENS.SignUp} component={SignUp} />
        <Stack.Screen name={SCREENS.Verification} component={Verification} />
        <Stack.Screen name={SCREENS.Splash} component={Splash} />
        <Stack.Screen name={SCREENS.AboutApp} component={AboutApp} />
        <Stack.Screen name={SCREENS.EditProfile} component={EditProfile} />
        <Stack.Screen name={SCREENS.More} component={More} />
        <Stack.Screen name={SCREENS.Notification} component={Notification} />
        <Stack.Screen name={SCREENS.EditPhoto} component={EditPhoto} />
        <Stack.Screen name={SCREENS.CreatePost} component={CreatePost} />
        <Stack.Screen
          name={SCREENS.NotificationSetting}
          component={NotificationSettings}
        />
        <Stack.Screen
          name={SCREENS.TermsAndCondition}
          component={TermsAndCondition}
        />
        <Stack.Screen
          name={SCREENS.ForgotPassword}
          component={ForgetPassword}
        />

        <Stack.Screen
          name={SCREENS.BottomBar}
          component={BottomBar}
          options={{headerShown: false}}
        />
      </Stack.Navigator>

      <Loader showLoader={false} />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
