import { NavigationContainer } from "@react-navigation/native";
import { useState, useEffect } from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStack from "./src/navigation/AuthStack";
import AppNavigation from "./src/navigation/AppNavigation";
import HomeStack from "./src/navigation/HomeStack";


export default function App() {

  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    // Check the user's authentication status here, and update the isSignedIn state accordingly
    // ...
    setIsSignedIn(true);
  }, []);

  const AppStack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{headerShown: false}}>
        <AppStack.Screen name="AuthStack" component={AuthStack} />
        <AppStack.Screen name="AppNavigation" component={AppNavigation} />
    </AppStack.Navigator>
    </NavigationContainer>
  );
}