import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ToastAndroid,
  TouchableHighlight,
} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import {SIZES, COLORS, IMAGES, width, STYLES} from './../../constants';
import {Icon, IconType, MyTouchableOpacity} from '../../components';
import Row from '../../components/Row';

export const SectionList = () => {
  const [listData, setListData] = useState(
    Array(5)
      .fill('')
      .map((_, i) => ({
        title: `title${i + 1}`,
        data: [
          ...Array(5)
            .fill('')
            .map((_, j) => ({
              key: `${i}.${j}`,
              text: `item #${j}`,
            })),
        ],
      })),
  );

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const [section] = rowKey.split('.');
    const newData = [...listData];
    const prevIndex = listData[section].data.findIndex(
      item => item.key === rowKey,
    );
    newData[section].data.splice(prevIndex, 1);
    setListData(newData);
    ToastAndroid.show('Removed', 850);
  };

  const onRowDidOpen = rowKey => {
    console.log('This row opened', rowKey);
  };

  const renderItem = data => (
    <TouchableHighlight
      onPress={() => {}}
      style={[styles.rowFront, STYLES.shadow]}
      activeOpacity={0.85}
      underlayColor={COLORS.primary}>
      <View>
        <Row style={{alignItems: 'center'}}>
          <Image
            source={IMAGES.user}
            style={{
              width: SIZES.twenty * 3,
              marginHorizontal: SIZES.ten,
              height: SIZES.twenty * 3,
            }}
            resizeMode="contain"
          />
          <Text style={{color: COLORS.black}}>
            Notification {data.item.text}{' '}
          </Text>
        </Row>
      </View>
    </TouchableHighlight>
  );

  const renderHiddenItem = (data, rowMap) => (
    <MyTouchableOpacity
      style={styles.rowBack}
      onPress={() => deleteRow(rowMap, data.item.key)}>
      <Icon
        name={'trash-o'}
        type={IconType.FontAwesome}
        color={COLORS.white}
        size={SIZES.twentyFive}
      />
      <Text style={[styles.backTextWhite]}>Delete</Text>
    </MyTouchableOpacity>
  );

  const renderSectionHeader = ({section}) => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: SIZES.fifteen,

        paddingVertical: SIZES.ten,
      }}>
      <Text style={{color: COLORS.gray, marginTop: SIZES.ten}}>
        May 26, 2020
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <SwipeListView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        stopLeftSwipe={false}
        useSectionList
        sections={listData}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        renderSectionHeader={renderSectionHeader}
        rightOpenValue={-width * 0.215}
        previewRowKey={'0'}
        previewOpenValue={-40}
        previewOpenDelay={3000}
        onRowDidOpen={onRowDidOpen}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: SIZES.fifteen,
  },
  backTextWhite: {
    color: COLORS.white,
  },
  rowFront: {
    // alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: SIZES.ten,
    // borderBottomWidth: 1,
    marginTop: 10,
    justifyContent: 'center',
    height: SIZES.twenty * 4,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: 'red',
    height: SIZES.twenty * 4,
    width: SIZES.twenty * 4,
    // flex: 1,
    borderRadius: SIZES.ten,
    alignSelf: 'flex-end',
    marginTop: 10,
    // flexDirection: 'row',
    // alignContent: 'center',
    justifyContent: 'center',
    // paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',

    top: 4,
    width: 75,
  },
  backRightBtnLeft: {
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.ten,
    justifyContent: 'center',
    right: 75,
    // marginTop: 10,
  },
  backRightBtnRight: {
    backgroundColor: `${COLORS.red}80`,
    // marginTop: 10,
    borderRadius: SIZES.ten,
    right: 0,
  },
});
