import {StyleSheet, Text, View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import {
  COLORS,
  FONTFAMILY,
  FONTS,
  IMAGES,
  SCREENS,
  SIZES,
  STYLES,
  width,
} from '../../constants';
import {CommonButton, IconButton, IconType, Row} from '../../components';

export default function Splash(props) {
  const {navigation} = props;
  return (
    <LinearGradient
      colors={['#f2a74f', '#ef692d']}
      start={{x: 0, y: 0.2}}
      end={{x: 0.5, y: 0.8}}
      style={[STYLES.container]}>
      <View style={styles.header}>
        <Image
          source={IMAGES.logoWithName}
          style={styles.img}
          resizeMode="contain"
        />
        <Text style={styles.heading}>Start posting now</Text>
        <Text style={styles.title}>
          Let's post your best work & get ready to get lots of insights from
          your community
        </Text>
        <Row style={styles.endRow}>
          <View style={styles.dot1} />
          <View style={styles.dot2} />
          <View style={styles.dot2} />
        </Row>
      </View>
      <View style={styles.footer}>
        <IconButton
          title="Sign in with your facebook"
          iconName="facebook"
          iconType={IconType.Entypo}
          iconColor={'#3e76d2'}
        />

        <CommonButton
          btnStyle={{marginTop: SIZES.twenty}}
          title="Sign in with your email"
          onPress={() => navigation.navigate(SCREENS.Login)}
          hasBackArrow
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1.5,
    paddingHorizontal: SIZES.fifteen,
    paddingTop: SIZES.twentyFive * 2,
    paddingRight: SIZES.twentyFive * 3,
  },
  footer: {
    flex: 1.2,
    backgroundColor: COLORS.white,
    borderTopRightRadius: SIZES.twenty,
    borderTopLeftRadius: SIZES.twenty,
    paddingHorizontal: SIZES.twenty,
    paddingTop: SIZES.five,
  },

  img: {
    width: '70%',
    alignSelf: 'baseline',
  },
  heading: {
    color: COLORS.white,
    fontFamily: FONTFAMILY.Bold,
    marginVertical: SIZES.twenty,
    fontSize: SIZES.twentyFive,
  },
  title: {
    color: COLORS.white,
    fontWeight: '300',
    marginVertical: SIZES.ten,
    fontSize: SIZES.fifteen + 1,
    letterSpacing: 1.5,
  },

  dot1: {
    width: SIZES.fifty - 10,
    padding: SIZES.five * 1.2,
    borderRadius: SIZES.twenty,
    backgroundColor: COLORS.white + 98,
  },
  dot2: {
    padding: SIZES.five * 1.2,
    borderRadius: width,
    backgroundColor: COLORS.white + 65,
    marginLeft: SIZES.five,
  },
  endRow: {
    alignItems: 'center',
    position: 'absolute',
    bottom: SIZES.twenty,
    start: SIZES.twenty,
  },
});
