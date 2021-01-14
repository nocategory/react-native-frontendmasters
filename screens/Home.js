import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native'
import PalettePreview from '../components/PalettePreview'

const SOLARIZED = [
  { colorName: 'Base03', hexCode: '#002b36' },
  { colorName: 'Base02', hexCode: '#073642' },
  { colorName: 'Base01', hexCode: '#586e75' },
  { colorName: 'Base00', hexCode: '#657b83' },
  { colorName: 'Base0', hexCode: '#839496' },
  { colorName: 'Base1', hexCode: '#93a1a1' },
  { colorName: 'Base2', hexCode: '#eee8d5' },
  { colorName: 'Base3', hexCode: '#fdf6e3' },
  { colorName: 'Yellow', hexCode: '#b58900' },
  { colorName: 'Orange', hexCode: '#cb4b16' },
  { colorName: 'Red', hexCode: '#dc322f' },
  { colorName: 'Magenta', hexCode: '#d33682' },
  { colorName: 'Violet', hexCode: '#6c71c4' },
  { colorName: 'Blue', hexCode: '#268bd2' },
  { colorName: 'Cyan', hexCode: '#2aa198' },
  { colorName: 'Green', hexCode: '#859900' },
]

const RAINBOW = [
  { colorName: 'Red', hexCode: '#FF0000' },
  { colorName: 'Orange', hexCode: '#FF7F00' },
  { colorName: 'Yellow', hexCode: '#FFFF00' },
  { colorName: 'Green', hexCode: '#00A099' },
  { colorName: 'Violet', hexCode: '#8B00FF' },
]

const FRONTEND_MASTERS = [
  { colorName: 'Red', hexCode: '#c02d28' },
  { colorName: 'Black', hexCode: '#3e3e3e' },
  { colorName: 'Grey', hexCode: '#8a8a8a' },
  { colorName: 'White', hexCode: '#ffffff' },
  { colorName: 'Orange', hexCode: '#e66225' },
]

const colorPalettes = [
  { paletteName: 'Solarized', palette: SOLARIZED },
  { paletteName: 'Rainbow', palette: RAINBOW },
  { paletteName: 'Frontend Masters', palette: FRONTEND_MASTERS },
]

const Home = ({ navigation }) => {
  return (
    <View style={styles.view}>
      <FlatList
        data={colorPalettes}
        scrollEnabled={false}
        keyExtractor={(item, index) => index}
        renderItem={({ item, index }) => {
          return (
            <PalettePreview
              onPress={() =>
                navigation.navigate('ColorPalette', {
                  paletteName: item.paletteName,
                  palette: item.palette,
                })
              }
              palette={item}
            />
          )
        }}
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
