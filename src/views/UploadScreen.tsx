import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { Audio } from 'expo-av';
import { Appbar, TextInput } from 'react-native-paper';

const UploadScreen = () => {
  const [image, setImage] = useState(null);
  const [audio, setAudio] = useState(null);

  const selectImage = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status === 'granted') {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images
      });
      if (!result.cancelled) {
        setImage(result.uri);
      }
    }
  };

  const selectAudio = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status === 'granted') {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Audio
      });
      if (!result.cancelled) {
        setAudio(result.uri);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Appbar>
        <Appbar.Content title="Upload" />
      </Appbar>
      <View style={styles.uploadContainer}>
        <Button title="Select Image" onPress={selectImage} />
        {image && <Image source={{ uri: image }} style={styles.image} />}
      </View>
      <View style={styles.uploadContainer}>
        <Button title="Select Audio" onPress={selectAudio} />
        {audio && <Text>{audio}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadContainer: {
    alignItems: 'center',
    marginTop: 20
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20
  }
});

export default UploadScreen;
