import React, { useState } from 'react'
import { Text, View, TouchableOpacity, Image } from "react-native"
import Layout from '../../constants/layout'
import { styles } from './grid.styles'

import GestureRecognizer, {
  swipeDirections
} from "react-native-swipe-gestures"

import Tile from '../tile/tile.component'

const Grid = () => {

    const [swipeText, setSwipeText] = useState()

    const board = new Array(25).fill(0)

    const onSwipeUp = (gestureState) => {
        console.log('YOU SWIPED UP')
    }

    const onSwipeDown = (gestureState) => {
        console.log("YOU SWIPED DOWN")
    }

    const onSwipeLeft = (gestureState) => {
        console.log("YOU SWIPED LEFT")
    }

    const onSwipeRight = (gestureState) => {
        console.log("YOU SWIPED RIGHT")
    }

    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
    };
    
    return (
      <GestureRecognizer
        style={styles.container}
        onSwipeUp={onSwipeUp}
        onSwipeDown={onSwipeDown}
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
        config={config}
      >
        {board.map((item, index) => (
          <Tile key={index} img={index} item={item} />
        ))}
      </GestureRecognizer>
    );
}

export default Grid 