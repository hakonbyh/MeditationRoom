import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react'
import CategoryComponent from '../components/CategoryComponent';

const images = {
    54321: require('../assets/54321.png'),
    breathing: require('../assets/breathing.png'),
  }

  
export default function MeditationScreen() {
return (
    <ScrollView style={styles.container}>
        <TouchableOpacity>
            <CategoryComponent style={{margin: 10}} path={images['54321']} title={'54321 Method'} description={'undefined'}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <CategoryComponent style={{margin: 10, marginBottom: 40}} path={images['breathing']} title={'Breathing Exercise'} description={'undefined'}/>
        </TouchableOpacity>
    </ScrollView>

)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});