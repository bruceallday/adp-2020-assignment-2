import React, { useState, useContext } from 'react'
import { Text, View, TouchableOpacity, Image, Animated} from "react-native"
import { styles } from '../tile/tile.styles'
import { FOOD_IMAGES } from './tile.images'
import Layout from '../../constants/layout'
import GameContext from '../../context/gameContext'
// import Draggable from "react-native-draggable"


const Tile = (props) => {

    const gameContext = useContext(GameContext)

    const { img, item, location } = props;

    return (
      <View style={styles.tile } >
          <Image
            source={FOOD_IMAGES[img]}
            style={{ width: 40, height: 40 }}
          />
      </View>
    )
}

export default Tile