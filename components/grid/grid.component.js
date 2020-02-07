import React, { useState } from 'react'
import { Text, View, TouchableOpacity, Image } from "react-native";
import Layout from '../../constants/layout'
import { styles } from './grid.styles'


import GestureRecognizer, {
  swipeDirections
} from "react-native-swipe-gestures"

import Tile from '../tile/tile.component'

const Grid = () => {

    // const board = new Array(25).fill(0)
    const board = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ]

    const randomNumber = (int) => {
        let num = Math.floor(Math.random() * int)
        return num
    }

    const tileWidth = Layout.width / 5

    const onSwipe = (gestureName, gestureState) => {
        const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections

        let initialX = gestureState.x0;
        let initialY = gestureState.y0;

        let i = Math.round((initialX - 0.5 * tileWidth) / tileWidth)
        let j = Math.round((initialY - 0.5 * tileWidth) / tileWidth)

        console.log(i, j);

        switch(gestureName){
            case SWIPE_UP:
                console.log("SWIPE UP")
                break;
                
            case SWIPE_DOWN:
                console.log("Swiped down")
                break;

            case SWIPE_LEFT:
                console.log("SWIPED LEFT")
                break;

            case SWIPE_RIGHT:
                console.log("SWIPED RIGHT")
                break;
        }
    }

    const config = {
        velocityThreshold: 0.01,
        directionalOffsetThreshold: 80
    };
    
    return (
      <GestureRecognizer
        style={styles.container}
        onSwipe={onSwipe}
        config={config}
      >
        {/*board.map((item, index) => (
          <Tile key={index} img={index} item={item} />
        ))*/}

        {board.map((row, index)=>(
            row.map((key, j)=>(
                <Tile key={j} img={randomNumber(10)} item={key} />
                ))
            ))
        }

      </GestureRecognizer>
    );
}

export default Grid 