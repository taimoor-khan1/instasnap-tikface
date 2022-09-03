import React, {Component} from 'react';
import {StyleSheet, View, Image, ActivityIndicator} from 'react-native';
import MyTouchableOpacity from './MyTouchableOpacity';

export default class LoadableImage extends Component {
  state = {
    loading: true,
  };

  render() {
    const {url, style} = this.props;

    return (
      <View style={[styles.container, style]}>
        <Image
          onLoadEnd={this._onLoadEnd}
          source={{uri: url}}
          style={style}
          {...this.props}
        />
        <ActivityIndicator
          style={styles.activityIndicator}
          animating={this.state.loading}
        />
      </View>
    );
  }

  _onLoadEnd = () => {
    this.setState({
      loading: false,
    });
  };
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  activityIndicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
