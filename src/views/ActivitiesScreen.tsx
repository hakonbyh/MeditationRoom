import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react'
import CategoryComponent from '../components/CategoryComponent';

const images = {
    painting: require('../assets/painting.png'),
    knitting: require('../assets/knitting.png'),
    puzzling: require('../assets/puzzle.png'),
  }

  
export default function ActivitesScreen() {
return (
    <ScrollView style={styles.container}>
        <TouchableOpacity>
            <CategoryComponent style={{margin: 10}} path={images['knitting']} title={'Knitting'} description={'undefined'}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <CategoryComponent style={{margin: 10}} path={images['painting']} title={'Painting'} description={'undefined'}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <CategoryComponent style={{margin: 10}} path={images['puzzling']} title={'Puzzle solving'} description={'undefined'}/>
        </TouchableOpacity>
        <View style={styles.bottomSpace} />
    </ScrollView>

)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    bottomSpace: {
        height: 40
    },
});