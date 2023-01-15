import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button as PaperButton } from 'react-native-paper'
import { theme } from '../core/theme'

export default function Button({ mode, style, ...props }) {
  return (
    <View style={{width: '100%'}}>
    <PaperButton
      style={[
        styles.button,
        mode === 'outlined',
        style,
      ]}
      theme={theme}
      color="primary"
      labelStyle={styles.text}
      mode={mode}
      {...props}
    />
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginVertical: 10,
    paddingVertical: 2,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
})
