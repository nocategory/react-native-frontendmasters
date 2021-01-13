import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ColorBox = ({ colorName, colorHex }) => {
  const background = {
    backgroundColor: colorHex,
  }
  // algorithm to apply black / white text color based on the box color
  const textColor = {
    color:
      parseInt(colorHex.replace('#', ''), 16) > 0xffffff / 1.1
        ? '#000'
        : '#fff',
  }
  return (
    <View>
      <View style={[styles.container, background]}>
        <Text style={[styles.text, textColor]}>{colorName}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 7,
    padding: 7,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFF',
    fontSize: 17,
  },
})

export default ColorBox
