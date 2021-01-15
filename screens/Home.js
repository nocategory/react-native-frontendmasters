import React, { useState, useEffect } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import PalettePreview from '../components/PalettePreview'

const Home = ({ navigation }) => {
  const [palettes, setPalettes] = useState()
  useEffect(() => {
    async function fetchData() {
      await fetch('https://color-palette-api.kadikraman.now.sh/palettes')
        .then((res) => res.json())
        .then((data) => setPalettes(data))
    }
    fetchData()
  }, [])
  return (
    <View style={styles.view}>
      <FlatList
        data={palettes}
        scrollEnabled={true}
        keyExtractor={(item) => item.paletteName}
        renderItem={({ item }) => (
          <PalettePreview
            onPress={() =>
              navigation.navigate('ColorPalette', {
                paletteName: item.paletteName,
                palette: item.colors,
              })
            }
            palette={item}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    margin: 20,
    padding: 5,
  },
  text: {
    fontWeight: '400',
    margin: 10,
    fontSize: 15,
    color: 'black',
  },
})

export default Home
