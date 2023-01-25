import * as React from 'react';
import {Card, Text } from 'react-native-paper';
import { BlurView } from 'expo-blur'
 



export default function CategoryComponent({ style, path, title, description }) {
  return (
    <Card style={[style, {overflow:'hidden'}]}>
    <Card.Cover source={path}/>
    <Card.Content style={{backgroundColor: 'rgba(100, 100, 100, 0.5)', width: '100%', position: 'absolute', bottom:0, paddingBottom: 1}}>
      <Text style={{color: 'white'}} variant="titleLarge">{title}</Text>
      <Text style={{color: 'white'}} variant="bodyMedium">{description}</Text>
    </Card.Content>
  </Card>
  )
}