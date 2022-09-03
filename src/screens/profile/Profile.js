import {StyleSheet, Text, View, StatusBar, Linking} from 'react-native';
import React, {useState} from 'react';
import {STYLES, height, SIZES, COLORS, FONTS, SCREENS} from '../../constants';
import {
  CommonButton,
  CustomHeader,
  IconButton,
  IconType,
} from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import CommonImage from '../../components/CommonImage';
import {NavigationContainer} from '@react-navigation/native';

export default function Profile(props) {
  const {navigation} = props;
  const [select, setSelect] = useState(null);

  const [fbShareURL, setfbShareURL] = useState('https://reactnativecode.com');
  const [content, setContent] = useState('Hello, Welcome To our Website.');

  const publishOnFB = () => {
    let params = [];
    if (fbShareURL) params.push('u=' + encodeURI(fbShareURL));
    if (content) params.push('quote=' + encodeURI(content));
    const url =
      'https://www.facebook.com/sharer/sharer.php?' + params.join('&');

    Linking.openURL(url)
      .then(data => {
        Alert.alert('Facebook....');
      })
      .catch(() => {
        Alert.alert('Something went wrong');
      });
  };

  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={['#f2a74f', '#ef692d']}
        start={{x: 0, y: 0.2}}
        end={{x: 0.5, y: 0.8}}
        locations={[0, 0.9, 0.8]}
        style={styles.header}>
        <CustomHeader hasBackArrow showEditIcon iconColor={COLORS.white} />
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
      <View style={{paddingHorizontal: SIZES.twenty}}>
        {data.map((item, index) => {
          return (
            <IconButton
              key={index}
              title={item.title}
              iconName={item.iconName}
              iconType={item.iconType}
              mediumText={item.mediumText}
              rotateIcon={item.rotateIcon}
              onPress={() => navigation.navigate(item.screen)}
              iconColor={COLORS.gray}
            />
          );
        })}

        <CommonButton
          title="Test"
          onPress={() => {
            publishOnFB();
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    borderBottomLeftRadius: SIZES.twenty,
    borderBottomRightRadius: SIZES.twenty,
    paddingTop: StatusBar.currentHeight,
  },
});

const data = [
  {
    title: 'Account Setting',
    iconName: 'user',
    iconType: IconType.AntDesign,
    screen: SCREENS.EditProfile,

    mediumText: true,
    rotateIcon: false,
  },
  {
    title: 'About App',
    iconName: 'history',
    iconType: IconType.FontAwesome5,
    screen: SCREENS.AboutApp,

    mediumText: true,
    rotateIcon: true,
  },
  {
    title: 'Notification',
    iconName: 'ios-notifications-outline',
    iconType: IconType.Ionicons,
    screen: SCREENS.NotificationSetting,

    mediumText: true,
    rotateIcon: false,
  },
  {
    title: 'Help',
    iconName: 'help-outline',
    iconType: IconType.MaterialIcons,
    screen: SCREENS.AboutApp,
    mediumText: true,
    rotateIcon: false,
  },
];
