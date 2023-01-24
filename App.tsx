import { NavigationContainer } from "@react-navigation/native";
import { useState, useEffect } from 'react';
import AuthStack from "./src/navigation/AuthStack";
import AppNavigation from "./src/navigation/AppNavigation";


export default function App() {

  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    // Check the user's authentication status here, and update the isSignedIn state accordingly
    // ...
    setIsSignedIn(true);
  }, []);


  return (
    <NavigationContainer>
    {isSignedIn ? (
      // No token found, user isn't signed in
      <AuthStack/>
    ) : (
      // User is signed in
      <AppNavigation />
    )}

    </NavigationContainer>
  );
}