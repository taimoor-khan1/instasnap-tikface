import {StyleSheet, Text, View, ScrollView, TextInput} from 'react-native';
import React from 'react';
import {
  SCREENS,
  SIZES,
  STYLES,
  height,
  COLORS,
  FONTFAMILY,
  FONTS,
} from '../../constants';
import {
  CommonButton,
  CustomHeader,
  EditText,
  Icon,
  IconType,
  MyTouchableOpacity,
  Row,
} from '../../components';

export default function CreatePost() {
  const EditIcons = ({name, type, onPress}) => {
    return (
      <MyTouchableOpacity style={styles.IconStyle} onPress={onPress}>
        <Icon
          name={name}
          type={type}
          size={SIZES.twentyFive}
          color={COLORS.black}
        />
      </MyTouchableOpacity>
    );
  };
  return (
    <View style={STYLES.container}>
      <CustomHeader title="Create Post" hasBackArrow />

      <ScrollView contentContainerStyle={{flexGrow: 1, padding: SIZES.twenty}}>
        <Row style={styles.topSide}>
          <MyTouchableOpacity style={styles.uploadBtn}>
            <Icon
              name={'photo'}
              type={IconType.FontAwesome}
              size={SIZES.twentyFive}
              color={COLORS.primary}
            />
            <Text style={{color: COLORS.primary, textAlign: 'center'}}>
              Upload a photo or video
            </Text>
          </MyTouchableOpacity>
          <TextInput
            placeholder="write your caption here"
            placeholderTextColor={COLORS.gray}
            style={styles.caption}
            multiline
          />
        </Row>
        <View style={{marginBottom: SIZES.fifteen}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {colordata.map(item => {
              return (
                <MyTouchableOpacity
                  style={{
                    width: SIZES.twentyFive,
                    height: SIZES.twentyFive,
                    borderRadius: SIZES.five,
                    marginRight: SIZES.fifteen,
                    backgroundColor: item.color,
                  }}
                />
              );
            })}
          </ScrollView>
        </View>
        <TextInput
          placeholder="#Hastag, #Hastag2, #Hastag3 _"
          placeholderTextColor={COLORS.gray}
          style={styles.tagsbar}
          multiline
        />
        <TextInput
          placeholder="Description"
          placeholderTextColor={COLORS.gray}
          style={styles.Description}
          multiline
        />
        <View style={styles.topRow}>
          <CommonButton
            hasBackArrow
            btnStyle={styles.btnStyle}
            title="Schedule"
            onPress={() => {}}
          />
          <View style={{flexDirection: 'row'}}>
            <EditIcons
              name="video-wireless-outline"
              type={IconType.MaterialCommunityIcons}
            />
            <EditIcons name="emoji-happy" type={IconType.Entypo} />
            <EditIcons name="adduser" type={IconType.AntDesign} />
            <EditIcons name="md-location-outline" type={IconType.Ionicons} />
          </View>
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <CommonButton
            title="Next"
            btnStyle={{marginTop: SIZES.twentyFive}}
            onPress={() => {}}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  topSide: {
    height: height * 0.15,
    marginVertical: SIZES.fifteen,
  },
  btnStyle: {
    flex: 1,
    height: SIZES.twentyFive * 2,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingHorizontal: SIZES.fifteen,
    alignItems: 'center',
    marginBottom: SIZES.ten,
  },
  IconStyle: {
    marginLeft: SIZES.twenty,
  },
  uploadBtn: {
    height: '100%',
    width: '25%',
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: SIZES.fifteen,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SIZES.five,
  },
  caption: {
    flex: 1,
    textAlignVertical: 'top',
    padding: SIZES.fifteen,
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.fifteen,
    marginLeft: SIZES.fifteen,
    height: '100%',
    borderColor: COLORS.black,
    color: COLORS.black,
    borderWidth: 1,
    borderRadius: SIZES.fifteen,
  },
  Description: {
    textAlignVertical: 'top',
    padding: SIZES.fifteen,
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.fifteen,
    borderColor: COLORS.black,
    color: COLORS.black,
    borderWidth: 1,
    height: SIZES.twenty * 5,
    borderRadius: SIZES.ten,
    marginBottom: SIZES.twenty,
  },
  tagsbar: {
    textAlignVertical: 'top',
    padding: SIZES.fifteen,
    height: SIZES.twenty * 3,
    marginBottom: SIZES.twenty,
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.fifteen,
    borderColor: COLORS.black,
    color: COLORS.black,
    borderWidth: 1,
    borderRadius: SIZES.ten,
  },
});
const colordata = [
  {
    color: '#ee5a29',
  },
  {
    color: '#000000',
  },
  {
    color: '#ffffff',
  },
  {
    color: '#0037c1',
  },
  {
    color: '#767577',
  },
  {
    color: '#FFD700',
  },
  {
    color: '#4e1789',
  },
  {
    color: '#871af6',
  },
  {
    color: '#5d536a',
  },
  {
    color: '#1eaf08',
  },
  {
    color: '#eeeeee',
  },
  {
    color: '#4a4b4d',
  },

  {
    color: '#ffeef2',
  },

  {
    color: '#8a7e9a',
  },
];
