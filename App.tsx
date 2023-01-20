import { StyleSheet, Text, View } from 'react-native';
import { LoginScreen, RegisterScreen, ResetPasswordScreen } from './src/views';
import BookScreen from './src/views/BookScreen';
import StartScreen from './src/views/StartScreen';
import Survey from './src/views/Survey';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Reset" component={ResetPasswordScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={StartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
