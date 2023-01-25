import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react'
import CategoryComponent from '../components/CategoryComponent';

const images = {
    custom: require('../assets/custom.png'),
    forest: require('../assets/forest.png'),
    hawaii: require('../assets/hawaii.jpeg'),
    winter: require('../assets/sami.jpeg'),
  }

  
export default function ScentScreen({ navigation }) {
return (
    <ScrollView style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("Custom")}>
            <CategoryComponent style={{margin: 10}} path={images['custom']} title={'Create your own'} description={'Upload your own images and sounds'}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <CategoryComponent style={{margin: 10}} path={images['hawaii']} title={'Tropical'} description={'Beach sounds and '}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <CategoryComponent style={{margin: 10}} path={images['forest']} title={'Forest'} description={'undefined'}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <CategoryComponent style={{margin: 10, marginBottom: 40}} path={images['winter']} title={'Winter'} description={'undefined'}/>
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