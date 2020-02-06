import React, { useState } from 'react'
import { Text, View, TouchableOpacity, Image } from "react-native"
import { styles } from '../tile/tile.styles'
import { FOOD_IMAGES } from './tile.images'
import { swipeDirections } from "react-native-swipe-gestures"
// import Draggable from "react-native-draggable"


const Tile = (props) => {

    const { img, item } = props;
    
    return (
      <View style={styles.tile}>
          <Image
            source={FOOD_IMAGES[img]}
            style={{ width: 40, height: 40 }}
          />
      </View>
    )
}

export default Tile