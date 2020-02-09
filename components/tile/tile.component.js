import React, { useState, useContext } from 'react'
import { Text, View, TouchableOpacity, Image, Animated} from "react-native"
import { styles } from '../tile/tile.styles'
import { FOOD_IMAGES } from './tile.images'
import Layout from '../../constants/layout'
import GameContext from '../../context/gameContext'
import Draggable from 'react-native-draggable'
// import Draggable from "react-native-draggable"


const Tile = (props) => {

    const gameContext = useContext(GameContext)

    const { img, item, location } = props;

    const tileWidth = Layout.width / 5

    const dragIndex = (event) => {
      
        // console.log(event);
        // console.log( "CURRENT X:" + event.touchHistory.touchBank[1].currentPageX);
        // console.log( "CURRENT Y:" + event.touchHistory.touchBank[1].currentPageY);

        let initialX = event.touchHistory.touchBank[1].currentPageX;
        let initialY = event.touchHistory.touchBank[1].currentPageY;

        let i = Math.round((initialX - 0.5 * tileWidth) / tileWidth)
        let j = Math.round((initialY - 0.5 * tileWidth) / tileWidth)

        console.log(i, j)
    }

    return (
      <View style={styles.tile}>
        <Draggable
          x={20}
          y={20}
          onDrag={event => dragIndex(event)}
          shouldReverse

        >
          <Image source={FOOD_IMAGES[img]} style={{ width: 40, height: 40 }} />
        </Draggable>
      </View>
    );
}

export default Tile