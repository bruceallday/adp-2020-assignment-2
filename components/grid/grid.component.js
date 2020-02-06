import React from 'react'
import { Text, View, TouchableOpacity, Image } from "react-native";
import Layout from '../../constants/layout'
import { styles } from './grid.styles'

import Tile from '../tile/tile.component'

const Grid = () => {

    const board = [
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""]
    ]
    
    return(
        <View style={styles.container}>
            {board.map((arr) => (
                arr.map((item, index) => (
                    <Tile key={index} img={index} />
                ))
            ))}
        </View>
    )
}

export default Grid