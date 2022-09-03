import React, {useState} from 'react';
import {View, Text, StyleSheet, Modal} from 'react-native';
import {CustomHeader, MyTouchableOpacity, Row} from '../../components';
import {SectionList} from './SectionList';
import {
  STYLES,
  COLORS,
  SIZES,
  FONTFAMILY,
  FONTS,
} from './../../constants/theme';

function Notification(props) {
  const [visible, setVisible] = useState(false);

  return (
    <View style={STYLES.container}>
      <View style={{alignItems: 'center'}}>
        <CustomHeader hasBackArrow title="Notifications" />

        <MyTouchableOpacity
          style={styles.headerStyle}
          onPress={() => setVisible(true)}>
          <Text style={styles.headerText}>Delete All</Text>
        </MyTouchableOpacity>
      </View>

      <SectionList />

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
              Confirmation
            </Text>
            <Text style={[FONTS.mediumFont14, {color: COLORS.gray}]}>
              Are you sure you want to delete all notifications?
            </Text>
            <Row
              style={{
                alignSelf: 'center',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: SIZES.twenty,
              }}>
              <MyTouchableOpacity
                onPress={() => {
                  setVisible(false);
                }}
                style={[
                  styles.logoutbtn,
                  styles.shodow,
                  {backgroundColor: COLORS.white},
                ]}>
                <Text style={[FONTS.mediumFont12, {color: COLORS.black}]}>
                  No
                </Text>
              </MyTouchableOpacity>

              <MyTouchableOpacity
                onPress={() => {
                  setVisible(false);
                }}
                style={[
                  styles.logoutbtn,
                  styles.shodow,
                  {backgroundColor: COLORS.primary},
                ]}>
                <Text style={[FONTS.mediumFont12, {color: COLORS.white}]}>
                  Yes
                </Text>
              </MyTouchableOpacity>
            </Row>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    right: 0,
    bottom: 8,
    marginEnd: SIZES.twenty,
    paddingHorizontal: SIZES.five,
    borderRadius: SIZES.five,
    backgroundColor: COLORS.primary,
    position: 'absolute',
    flexDirection: 'row',
    paddingVertical: SIZES.five,
  },
  headerText: {
    fontFamily: FONTFAMILY.Medium,
    color: COLORS.white,
    fontSize: SIZES.body10,
    marginHorizontal: SIZES.five,
  },
  modelContainer: {
    borderWidth: 2,
    padding: SIZES.fifteen,
    borderRadius: SIZES.ten,
    paddingHorizontal: SIZES.twenty,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.white,
  },
  logoutbtn: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.five,
    paddingVertical: SIZES.ten,
    marginHorizontal: SIZES.ten,
    paddingHorizontal: SIZES.twentyFive * 1.5,
  },
  shodow: {
    elevation: 9,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    shadowColor: COLORS.black,
  },
});

export default Notification;
