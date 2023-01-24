import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react'
import CategoryComponent from '../components/CategoryComponent';

const images = {
    forest: require('../assets/forest.png'),
    hawaii: require('../assets/hawaii.jpeg'),
    winter: require('../assets/sami.jpeg'),
  }

  
export default function ScentScreen() {
return (
    <ScrollView style={styles.container}>
        <TouchableOpacity>
            <CategoryComponent style={{margin: 10}} path={images['hawaii']} title={'Hawaii theme'} description={'undefined'}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <CategoryComponent style={{margin: 10}} path={images['forest']} title={'Forest theme'} description={'undefined'}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <CategoryComponent style={{margin: 10, marginBottom: 40}} path={images['winter']} title={'Winter theme'} description={'undefined'}/>
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