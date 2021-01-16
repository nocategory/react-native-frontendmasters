import React, { useState, useEffect } from 'react'
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableHighlight,
} from 'react-native'
import PalettePreview from '../components/PalettePreview'

const Home = ({ navigation, route }) => {
  const [palettes, setPalettes] = useState(null)
  const [isRefreshing, setRefreshStatus] = useState(false)
  const newColorPalette = route.params
    ? route.params.newColorPalette
    : undefined

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
    }, 2000)
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (newColorPalette) {
      setPalettes((palettes) => [newColorPalette, ...palettes])
    }
  }, [newColorPalette])

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
        ListHeaderComponent={
          <TouchableHighlight
            onPress={() => navigation.navigate('ColorPaletteModal')}
            underlayColor={'rgba(40, 40, 40, 0.1)'}
            style={styles.touchableStyle}>
            <Text style={styles.addScheme}>→ Add a new color palette</Text>
          </TouchableHighlight>
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  addScheme: {
    fontSize: 22,
    color: '#fff',
    fontWeight: '400',
    padding: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
  touchableStyle: {
    justifyContent: 'center',
    alignSelf: 'stretch',
    borderRadius: 5,
    backgroundColor: '#201f24',
    marginHorizontal: 10,
    marginVertical: 15,
  },
  view: {
    padding: 10,
    backgroundColor: '#fff',
  },
  text: {
    fontWeight: '400',
    margin: 10,
    fontSize: 15,
    color: 'black',
  },
})

export default Home
