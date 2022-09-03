import React from 'react';
import {
  StyleSheet,
  Text,
  Modal,
  View,
  Image,
  ActivityIndicator,
} from 'react-native';
import {COLORS, IMAGES, STYLES} from '../../constants';

export default function Loader(props) {
  return (
    <Modal
      transparent={true}
      animationType={'fade'}
      visible={props.showLoader}
      statusBarTranslucent
      style={{zIndex: 1100}}
      onRequestClose={() => {}}>
      <View style={styles.modalBackground}>
        <View style={[styles.activityIndicatorWrapper, STYLES.card]}>
          <Image
            source={IMAGES.Loader}
            style={{height: 150, width: 150}}
            resizeMode="contain"
            resizeMethod="resize"
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#rgba(0, 0, 0, 0.7)',
    zIndex: 1000,
  },
  activityIndicatorWrapper: {
    // backgroundColor: COLORS.white,
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
