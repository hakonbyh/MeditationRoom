import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CardComponent from '../components/CardComponent'

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("Meditation")}>
        <CardComponent title="Meditation and mindfulness" description="User guide for doing meditation" icon="meditation" style={{margin: 5}}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Music")}>
        <CardComponent title="Music" description="Generate your own mood-based music" icon="music" style={{margin: 5}}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Themes")}>
        <CardComponent title="Reality wall" description="Experience the different scents" icon="scent" style={{margin: 5}}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Activities")}>
        <CardComponent title="Activites" description="Choose from a variety of activities" icon="run" style={{margin: 5}}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Feedback")}>
        <CardComponent title="Feedback" description="Let us know how you feel" icon="information" style={{margin: 5}}/>
        </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      
    },
  });
