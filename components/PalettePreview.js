import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native'

const PalettePreview = ({ onPress, palette }) => {
  const colors = palette.colors.slice(0, 3)
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.heading}>{palette.paletteName}</Text>
      <FlatList
        style={styles.list}
        horizontal={true}
        data={colors}
        keyExtractor={(item) => item.hexCode}
        renderItem={({ item }) => (
          <View
            style={[styles.color, { backgroundColor: item.hexCode }]}></View>
        )}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  list: {
    marginBottom: 30,
  },
  color: {
    shadowColor: '#000',
    shadowOffset: { width: -3, height: 10 },
    borderWidth: 1.2,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 2,
    height: 40,
    width: 40,
    marginRight: 12,
  },
})

export default PalettePreview
