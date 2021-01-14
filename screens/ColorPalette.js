import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import ColorBox from '../components/ColorBox'

const ColorPalette = ({ route }) => {
  const { paletteName, palette } = route.params
  return (
    <View style={styles.view}>
      <FlatList
        data={palette}
        renderItem={({ item }) => (
          <ColorBox colorName={item.colorName} colorHex={item.hexCode} />
        )}
        keyExtractor={(item) => item.hexCode}
        ListHeaderComponent={<Text style={styles.text}>{paletteName}</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    margin: 20,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 17,
  },
})

export default ColorPalette
