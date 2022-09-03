import React, {Component} from 'react';
import {StyleSheet, View, Image, ActivityIndicator} from 'react-native';
import MyTouchableOpacity from './MyTouchableOpacity';
import Video from 'react-native-video';
import {Thumbnail} from 'react-native-thumbnail-video';

export default class LoadableImage extends Component {
  state = {
    loading: true,
    paused: false,
  };

  render() {
    const {url, style} = this.props;

    return (
      <View style={[styles.container, style]}>
        {/* <Thumbnail url={url} /> */}
        <Video
          onLoad={this._onLoadEnd}
          source={{uri: url}}
          repeat={false}
          muted
          paused={this.state.paused}
          style={style}
          playInBackground={false}
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
    setTimeout(() => {
      this.setState({
        paused: true,
      });
    }, 2000);
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
