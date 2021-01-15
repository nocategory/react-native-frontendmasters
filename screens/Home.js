import React, { useState, useEffect } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import PalettePreview from '../components/PalettePreview'

const Home = ({ navigation }) => {
  const [palettes, setPalettes] = useState()
  const [isRefreshing, setRefreshStatus] = useState(false)

  async function fetchData() {
    await fetch('https://color-palette-api.kadikraman.now.sh/palettes')
      .then((res) => res.json())
      .then((data) => setPalettes(data))
  }

  async function refreshData() {
    setRefreshStatus(true)
    await fetchData()
    setTimeout(() => {
      setRefreshStatus(false)
    }, 5000)
  }

  useEffect(() => {
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
        refreshing={isRefreshing}
        onRefresh={() => refreshData()}
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
