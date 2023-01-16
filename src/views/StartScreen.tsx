import { BottomNavigation, Appbar, Text } from 'react-native-paper';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const StartScreen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'search', title: 'Search', icon: 'search' },
    { key: 'settings', title: 'Settings', icon: 'settings' },
  ]);

  const handleIndexChange = (index) => setIndex(index);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    search: SearchScreen,
    settings: SettingsScreen,
  });

  return (
    <SafeAreaProvider>
      <Appbar.Header style={styles.header}>
        <Appbar.Content title="My App" />
      </Appbar.Header>
      <BottomNavigation
        style={styles.navigation}
        navigationState={{ index, routes }}
        onIndexChange={handleIndexChange}
        renderScene={renderScene}
        activeColor={'#0052CC'}
        inactiveColor={'#8F9BB3'}
        barStyle={{ backgroundColor: '#F5F5F5' }}
      />
    </SafeAreaProvider>
  );
};

const HomeScreen = () => {
  return (
    <Text>Home Screen</Text>
  );
};

const SearchScreen = () => {
  return (
    <Text>Search Screen</Text>
  );
};

const SettingsScreen = () => {
  return (
    <Text>Settings Screen</Text>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F5F5F5',
    elevation: 0
  },
  navigation: {
    elevation: 0
  }
});

export default StartScreen;
