import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Text, Button, Appbar } from 'react-native-paper';
import Background from '../components/Background';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { theme } from '../core/theme';

const Survey = () => {
  const [selectedOption, setSelectedOption] = React.useState(null);
  const {height} = Dimensions.get('window');
  const topMargin = height*0.15
 
  return (
    <View style={styles.background}>
        <SafeAreaProvider>
        <Appbar.Header style={{backgroundColor:'#1D3F53'}}>
            <Appbar.BackAction onPress={() => {}} color='white'/>
            <Appbar.Content title="Generate new session" color='white' />
        </Appbar.Header>
        <View style={styles.container2}>
        <View style={styles.questionContainer}>
          <Text style={styles.question}>How do you feel?</Text>
        </View>
        <View style={styles.optionsContainer}>
          <Button
            theme={theme}
            color="primary"
            mode={selectedOption === 1 ? 'contained' : 'outlined'}
            onPress={() => setSelectedOption(1)}
            style={styles.option}
          >
            Angry
          </Button>
          <Button
            theme={theme}
            color="primary"
            mode={selectedOption === 2 ? 'contained' : 'outlined'}
            onPress={() => setSelectedOption(2)}
            style={styles.option}
          >
            Happy
          </Button>
          <Button
            theme={theme}
            color="primary"
            mode={selectedOption === 3 ? 'contained' : 'outlined'}
            onPress={() => setSelectedOption(3)}
            style={styles.option}
          >
            Sad
          </Button>
          <Button
            theme={theme}
            color="primary"
            mode={selectedOption === 4 ? 'contained' : 'outlined'}
            onPress={() => setSelectedOption(4)}
            style={styles.option}
          >
            Fear
          </Button>
        </View>
        </View>
        </SafeAreaProvider>
    </View>
  );
};


const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'stretch',
    padding: 8,
    backgroundColor: "red",
  },
  questionContainer: {
    alignItems: 'center',
    marginVertical: 8,
  },
  question: {
    fontSize: 18,
    textAlign: 'center',
  },
  optionsContainer: {
    flexDirection: 'column',
    alignItems: 'stretch',
    width: '100%',
  },
  option: {
    marginVertical: 10,
    borderRadius: 8,
    height: 40,
  },
  buttonsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'space-between',
    padding: 8,
  },
  container2: {
    flex: 1,
    margin: 20,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
  },
});

export default Survey;
