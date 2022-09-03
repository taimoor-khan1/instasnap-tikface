import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {
  Row,
  Icon,
  IconType,
  MyTouchableOpacity,
  CommonButton,
  IconButton,
} from '../../components';
import CircleImage from '../../components/CircleImage';

import {
  STYLES,
  SIZES,
  FONTS,
  COLORS,
  SCREENS,
  CONSTANTS,
} from './../../constants/theme';

export default function More(props) {
  const {navigation} = props;

  const [select, setSelect] = useState('');
  const [visible, setVisible] = useState(false);

  const renderItem = ({item, index}) => {
    return (
      <MyTouchableOpacity
        onPressIn={() => {
          setSelect(item.name);
        }}
        onPressOut={() => {
          setSelect('');
        }}
        onPress={() => {
          if (item.screen === 'LogOut') {
            setVisible(true);
          } else if (item.screen) {
            navigation.navigate(item.screen);
          }
        }}
        style={styles.unSelect}>
        <Row style={{alignItems: 'center'}}>
          <Icon
            name={item.icon}
            type={item.type}
            color={select === item.name ? COLORS.primary : COLORS.gray}
            size={SIZES.twentyFive}
          />
          <Text
            style={[
              FONTS.mediumFont14,
              {
                color: select === item.name ? COLORS.primary : COLORS.gray,
                paddingHorizontal: SIZES.twenty,
              },
            ]}>
            {item.name}
          </Text>
        </Row>
      </MyTouchableOpacity>
    );
  };

  return (
    <View style={[STYLES.container, {paddingHorizontal: SIZES.twenty}]}>
      <Row style={{alignItems: 'center'}}>
        <MyTouchableOpacity
          onPress={() => navigation.navigate(SCREENS.Profile)}>
          <CircleImage
            style={{
              height: SIZES.fifty,
              width: SIZES.fifty,
              borderRadius: SIZES.fifty,
              borderWidth: 2,
              borderColor: COLORS.primary,
            }}
          />
        </MyTouchableOpacity>

        <View style={{marginHorizontal: SIZES.fifteen}}>
          <Text style={[FONTS.mediumFont16, {color: COLORS.black}]}>
            Valetudo Beats
          </Text>
          <Text style={[FONTS.mediumFont14, {color: COLORS.gray}]}>Canada</Text>
        </View>
      </Row>

      <FlatList
        data={Option}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{paddingTop: SIZES.twentyFive, flexGrow: 1}}
      />

      <Modal visible={visible} transparent={true} animationType={'fade'}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            paddingHorizontal: SIZES.twentyFive,
            backgroundColor: `${COLORS.black}90`,
          }}>
          <View style={[styles.modelContainer]}>
            <Text
              style={[
                FONTS.mediumFont18,
                {
                  color: COLORS.primary,
                  marginVertical: SIZES.fifteen,
                },
              ]}>
              Log Out?
            </Text>
            <Text style={[FONTS.mediumFont14, {color: COLORS.gray}]}>
              Are you sure you want to logout?
            </Text>
            <Row
              style={{
                alignSelf: 'center',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: SIZES.twenty,
              }}>
              <TouchableOpacity
                onPress={() => {
                  setVisible(false);
                }}
                style={[
                  styles.logoutbtn,
                  styles.shodow,
                  {backgroundColor: COLORS.white},
                ]}>
                <Text style={[FONTS.mediumFont12, {color: COLORS.black}]}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setVisible(false);
                  navigation.navigate(SCREENS.Splash);
                }}
                style={[
                  styles.logoutbtn,
                  styles.shodow,
                  {backgroundColor: COLORS.primary},
                ]}>
                <Text style={[FONTS.mediumFont12, {color: COLORS.white}]}>
                  Logout
                </Text>
              </TouchableOpacity>
            </Row>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  select: {
    paddingVertical: SIZES.twenty,
    paddingHorizontal: SIZES.twenty,
    marginRight: SIZES.twenty,
    marginVertical: SIZES.ten,
    backgroundColor: COLORS.purple,
    borderRadius: SIZES.fifteen,
  },
  unSelect: {
    paddingVertical: SIZES.twenty,
    paddingHorizontal: SIZES.twenty,
    marginRight: SIZES.twenty,
    marginVertical: SIZES.ten,
    borderRadius: SIZES.fifteen,
  },
  logoutbtn: {
    paddingHorizontal: SIZES.fifteen,
    paddingVertical: SIZES.ten,
    marginHorizontal: SIZES.fifteen,
    borderRadius: SIZES.five,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modelContainer: {
    backgroundColor: COLORS.white,
    padding: SIZES.fifteen,
    paddingHorizontal: SIZES.twenty,
    borderRadius: SIZES.ten,
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  shodow: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
});

const Option = [
  {
    id: '1',
    name: 'Notification',
    icon: 'ios-notifications-outline',
    type: IconType.Ionicons,
    screen: SCREENS.Notification,
  },
  {
    id: '2',
    name: 'Profile',
    icon: 'user',
    type: IconType.AntDesign,
    screen: SCREENS.Profile,
  },
  {
    id: '2',
    name: 'Terms & Conditions',
    icon: 'newspaper-outline',
    type: IconType.Ionicons,
    screen: SCREENS.TermsAndCondition,
  },
  {
    id: '3',
    name: 'Settings',
    icon: 'setting',
    type: IconType.AntDesign,
    screen: SCREENS.NotificationSetting,
  },
  {
    id: '4',
    name: 'Log Out',
    icon: 'logout',
    type: IconType.MaterialCommunityIcons,
    screen: 'LogOut',
    bgColor: COLORS.transparent,
  },
];
