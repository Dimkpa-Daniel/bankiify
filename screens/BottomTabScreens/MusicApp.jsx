import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Alert } from 'react-native';
import { Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';
import musicData from '../../assets/music.json';

// Helper function to map file names to assets
const getAudioFile = (fileName) => {
  switch (fileName) {
    case 'dance.mp3':
      return require('../../assets/dance.mp3');
    case 'meet.mp3':
      return require('../../assets/meet.mp3');
    default:
      return null;
  }
};

const MusicPlayer = () => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRepeatAll, setIsRepeatAll] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const soundRef = useRef(null);

  useEffect(() => {
    // Manage playback status updates
    const loadSound = async () => {
      if (sound) {
        soundRef.current = sound;
        sound.setOnPlaybackStatusUpdate((status) => {
          if (status.isLoaded) {
            setCurrentTime(status.positionMillis / 1000);
            setDuration(status.durationMillis / 1000);
            if (status.didJustFinish) {
              if (isRepeatAll) {
                nextTrack();
              } else {
                stopSound();
              }
            }
          }
        });
      }
    };

    loadSound();
  }, [sound]);

  const playSound = async (fileName, index) => {
    // Stop any currently playing sound
    if (sound) {
      await sound.stopAsync();
      setIsPlaying(false);
    }

    // Load and play new sound
    const file = getAudioFile(fileName);
    if (file) {
      const { sound } = await Audio.Sound.createAsync(file);
      setSound(sound);
      setCurrentIndex(index);
      await sound.playAsync();
      setIsPlaying(true);
    } else {
      Alert.alert('Error', 'Unable to find the audio file.');
    }
  };

  const stopSound = async () => {
    if (sound) {
      await sound.stopAsync();
      setSound(null);
      setIsPlaying(false);
    }
  };

  const pauseSound = async () => {
    if (sound) {
      await sound.pauseAsync();
      setIsPlaying(false);
    }
  };

  const nextTrack = () => {
    const nextIndex = (currentIndex + 1) % musicData.length;
    playSound(musicData[nextIndex].file, nextIndex);
  };

  const prevTrack = () => {
    const prevIndex = (currentIndex - 1 + musicData.length) % musicData.length;
    playSound(musicData[prevIndex].file, prevIndex);
  };

  const toggleRepeat = () => {
    setIsRepeatAll(!isRepeatAll);
  };

  const downloadFile = async (fileName) => {
    const asset = Asset.fromModule(getAudioFile(fileName));
    await asset.downloadAsync();
    const fileUri = FileSystem.documentDirectory + fileName;
    try {
      await FileSystem.moveAsync({
        from: asset.localUri,
        to: fileUri,
      });
      Alert.alert('Download completed', 'File saved at: ' + fileUri);
    } catch (error) {
      console.error('Error downloading file:', error);
      Alert.alert('Download failed', 'An error occurred while downloading the file.');
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={musicData}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <Text>{item.title} - {item.artist}</Text>
            <Text>Duration: {Math.floor(duration / 60)}:{Math.floor(duration % 60)}</Text>
            <Text>Current Time: {Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60)}</Text>
            <Button
              title={isPlaying && currentIndex === index ? 'Pause' : 'Play'}
              onPress={() => isPlaying && currentIndex === index ? pauseSound() : playSound(item.file, index)}
            />
            <Button
              title="Stop"
              onPress={stopSound}
            />
            <Button
              title="Next"
              onPress={nextTrack}
            />
            <Button
              title="Prev"
              onPress={prevTrack}
            />
            <Button
              title={isRepeatAll ? "Repeat All" : "Repeat One"}
              onPress={toggleRepeat}
            />
            <Button
              title="Download"
              onPress={() => downloadFile(item.file)}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default MusicPlayer;
