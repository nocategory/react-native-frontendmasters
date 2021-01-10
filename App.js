import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import ColorBox from './components/ColorBox'

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={{ fontWeight: 'bold', fontSize: 17, marginVertical: 20 }}>
        Here are some boxes with different colours:
      </Text>
      <ColorBox colorName="blue" colorHex="#256EFF" />
      <ColorBox colorName="violet" colorHex="#46237A" />
      <ColorBox colorName="green" colorHex="#3DDC97" />
      <ColorBox colorName="red" colorHex="#FF495C" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    margin: 20,
  },
})

export default App
