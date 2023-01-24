import * as React from 'react';
import {Card, Text } from 'react-native-paper';


export default function CategoryComponent({ style, path, title, description }) {
  return (
    <Card style={style}>
    <Card.Cover source={path} />
    <Card.Content style={{padding: 10}}>
      <Text variant="titleLarge">{title}</Text>
      <Text variant="bodyMedium">{description}</Text>
    </Card.Content>
  </Card>
  )
}