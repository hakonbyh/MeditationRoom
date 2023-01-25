import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import * as DocumentPicker from 'expo-document-picker';
import { Button, shadow } from 'react-native-paper';
import { theme } from '../core/theme'

const UploadScreen = () => {
  const [image, setImage] = useState(null);
  const [audio, setAudio] = useState(null);

  const selectImage = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status === 'granted') {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsMultipleSelection: true,
      });
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    }
  };

  const selectAudio = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status === 'granted') {
      const result = await DocumentPicker.getDocumentAsync({
        type: 'audio/*',
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.uploadContainer}>
      <Button mode="contained" onPress={selectImage} style={styles.button}>Select Image</Button>
        {image && <Image source={{ uri: image }} style={styles.image} />}
      </View>
      <View style={styles.uploadContainer}>
      <Button mode="contained" onPress={selectAudio} style={styles.button}>Select Audio</Button>
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
  },
  button: {
    margin:10,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    borderRadius: 10,
    backgroundColor: theme.colors.primary
  },
});

export default UploadScreen;
