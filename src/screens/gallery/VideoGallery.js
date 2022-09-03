import {StyleSheet, Text, View} from 'react-native';
import React, {useMemo} from 'react';
import MasonaryList from '../../components/MasonaryList';
import {height, STYLES, SIZES} from '../../constants';
import {CustomHeader, MyTouchableOpacity} from '../../components';
import LoadableVideo from '../../components/VideoView';

export default function VideoGallery() {
  const RenderImages = ({item}) => {
    const randomBool = useMemo(() => Math.random() < 0.5, []);

    return (
      <MyTouchableOpacity
        key={item.id}
        style={{
          margin: SIZES.five,
          flex: 1,
          borderRadius: SIZES.ten,
        }}>
        <LoadableVideo
          url={item.imgURL}
          style={{
            height: randomBool ? SIZES.fifty * 3.25 : SIZES.fifty * 4.25,
            alignSelf: 'stretch',
            borderRadius: SIZES.ten,
          }}
          //   resizeMode="cover"
        />
      </MyTouchableOpacity>
    );
  };
  return (
    <View style={STYLES.container}>
      <CustomHeader title="Videos" containerStyle={styles.topStyle} />
      <MasonaryList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <RenderImages item={item} />}
        onEndReachedThreshold={0.1}
        renderToHardwareTextureAndroid
        contentContainerStyle={{paddingBottom: height * 0.1}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  topStyle: {
    marginBottom: SIZES.twentyFive,
  },
});

const data = [
  {
    id: 'id123',
    imgURL:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    text: 'Pioneer LHS Chaise Lounger in Grey Colour',
  },
  {
    id: 'id124',
    imgURL:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    text: 'Precedant Furniture',
  },
  {
    id: 'id125',
    imgURL:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    text: 'Leverette Upholstered Platform Bed',
  },
  {
    id: 'id126',
    imgURL:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    text: 'Briget Accent Table',
  },
  {
    id: 'id127',
    imgURL:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    text: 'Rivet Emerly Media Console',
  },
  {
    id: 'id128',
    imgURL:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    text: 'Drew Barrymore Flower Home Accent Chair',
  },
  {
    id: 'id129',
    imgURL:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    text: 'Ecobirdy Charlie Chair',
  },
  {
    id: 'id130',
    imgURL:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    text: 'Hailey Sofa',
  },
  {
    id: 'id131',
    imgURL:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    text: 'Farmhouse Dining Table',
  },
  {
    id: 'id132',
    imgURL:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    text: 'Evelyn Coffee Table',
  },
  {
    id: 'id133',
    imgURL:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4',
    text: 'Slope Nomad Leather Sofa',
  },
  {
    id: 'id134',
    imgURL:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
    text: 'Chair and Table',
  },
  {
    id: 'id223',
    imgURL:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4',
    text: 'Pioneer LHS Chaise Lounger in Grey Colour',
  },
];
