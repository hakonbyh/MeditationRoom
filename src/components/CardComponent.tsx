import * as React from 'react';
import { Avatar, Card } from 'react-native-paper';
import { theme } from '../core/theme'


export default function CardComponent( {title, description, icon, style} ) {
  const LeftContent = props => <Avatar.Icon {...props} icon={icon} backgroundColor={theme.colors.primary}/>
  return (
    <Card style={style}>
      <Card.Title title={title} subtitle={description} left={LeftContent} />
    </Card>
  )
}