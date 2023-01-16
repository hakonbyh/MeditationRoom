import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {  LoginScreen, RegisterScreen } from './src/views';
import BookScreen from './src/views/BookScreen';
import StartScreen from './src/views/StartScreen';
import Survey from './src/views/Survey';

export default function App() {
  return (
    <View style={styles.container}>
      <BookScreen></BookScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
