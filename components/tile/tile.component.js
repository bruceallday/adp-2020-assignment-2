import React, { useState, useContext } from 'react'
import { Text, View, TouchableOpacity, Image, Animated} from "react-native"
import { styles } from '../tile/tile.styles'
import { FOOD_IMAGES } from './tile.images'
import Layout from '../../constants/layout'
import GameContext, { defaultContext } from '../../context/gameContext'
import Draggable from 'react-native-draggable'

const Tile = (props) => {

    const gameContext = useContext(GameContext)

    const { img, item, location } = props;

    const tileWidth = Layout.width / 5

    const dragIndex = (event) => {
      
        // console.log(event);

        let startX = Math.round(event.touchHistory.touchBank[1].startPageX);
        let currentX = Math.round(event.touchHistory.touchBank[1].currentPageX);

        let startY= Math.round(event.touchHistory.touchBank[1].startPageY);
        let currentY = Math.round(event.touchHistory.touchBank[1].currentPageY);

        let i = Math.round((startX - 0.5 * tileWidth) / tileWidth);
        let j = Math.round((currentX - 0.5 * tileWidth) / tileWidth);

        let k = Math.round((startY - 0.5 * tileWidth) / tileWidth);
        let l = Math.round((currentY - 0.5 * tileWidth) / tileWidth);

        console.log("X POSITIONS: " + startX + " " + currentX);
        console.log("Y POSITIONS: " + startY + " " + currentY);

        console.log("X POSITIONS: " + i + " " + j);
        console.log("Y POSITIONS: " + k + " " + l);

        if (currentX > startX) {
          console.log("DRAGGED RIGHT");
        } else if (currentX < startX){
          console.log("DRAGGED LEFT")
        }

        if (currentY > startY){
          console.log("DRAGGED DOWN")
        }else if(currentY < startY){
          console.log("DRAGGED UP")
        }

        if (currentX > startX + tileWidth / 2){
          console.log("COLLIDED RIGHT");
        }else if (currentX < startX - tileWidth / 2){
          console.log("COLLIDED LEFT")
        }

        if (currentY > startY + tileWidth / 2){
          console.log("COLLIDED DOWN")
        }else if(currentY < startY - tileWidth / 2){
          console.log("COLLIDED TOP")
        }

      }

    return (
      <View style={styles.tile}>
        <Draggable
          x={20}
          y={20}
          onDrag={event => dragIndex(event)}
          onRelease={event => dragIndex(event)}
          shouldReverse
        >
          <Image source={FOOD_IMAGES[img]} style={{ width: 40, height: 40 }} />
        </Draggable>
      </View>
    );
}

export default Tile