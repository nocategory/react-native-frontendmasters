import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={{ fontWeight: 'bold', fontSize: 17, marginVertical: 20 }}>
        Here are some boxes with different colours:
      </Text>
      <View style={[styles.container, styles.violetColor]}>
        <Text style={styles.text}>violet</Text>
      </View>
      <View style={[styles.container, styles.blueColor]}>
        <Text style={styles.text}>blue</Text>
      </View>
      <View style={[styles.container, styles.greenColor]}>
        <Text style={styles.text}>aquamarine</Text>
      </View>
      <View style={[styles.container, styles.redColor]}>
        <Text style={styles.text}>red</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  violetColor: {
    backgroundColor: '#46237A',
  },
  blueColor: {
    backgroundColor: '#256EFF',
  },
  greenColor: {
    backgroundColor: '#3DDC97',
  },
  redColor: {
    backgroundColor: '#FF495C',
  },
  text: {
    color: '#FFF',
    fontSize: 17,
  },
  safeArea: {
    flex: 1,
    margin: 20,
  },
  container: {
    backgroundColor: '#201f24',
    margin: 7,
    padding: 7,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App
