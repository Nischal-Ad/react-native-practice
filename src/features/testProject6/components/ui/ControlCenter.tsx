import {View} from 'react-native';
import React from 'react';
import TrackPlayer, {State, usePlaybackState} from 'react-native-track-player';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet} from 'react-native';
import {Pressable} from 'react-native';

const ControlCenter = () => {
  const playBackState = usePlaybackState();

  const skipToNext = async () => {
    await TrackPlayer.skipToNext();
  };

  const skipToPrevious = async () => {
    await TrackPlayer.skipToPrevious();
  };

  const togglePlayback = async (palyback: State) => {
    const currentTrack = await TrackPlayer.getCurrentTrack();

    if (currentTrack !== null) {
      if (palyback === State.Paused || palyback === State.Ready) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={skipToPrevious}>
        <Icon style={styles.icon} name="skip-previous" size={40} />
      </Pressable>
      <Pressable onPress={() => togglePlayback(playBackState)}>
        <Icon
          style={styles.icon}
          name={playBackState === State.Playing ? 'pause' : 'play-arrow'}
          size={40}
        />
      </Pressable>
      <Pressable onPress={skipToNext}>
        <Icon style={styles.icon} name="skip-next" size={40} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 56,

    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: '#FFFFFF',
  },
  playButton: {
    marginHorizontal: 24,
  },
});

export default ControlCenter;
