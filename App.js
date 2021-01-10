import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.textColor}>Hello world!</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  textColor: {
    color: '#FFF',
    fontSize: 24,
  },
  safeArea: {
    flex: 1,
  },
  container: {
    backgroundColor: '#201f24',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App
