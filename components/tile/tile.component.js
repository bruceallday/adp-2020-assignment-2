import React, { useState, useContext } from 'react'
import { Text, View, TouchableOpacity, Image, Animated} from "react-native"
import { styles } from '../tile/tile.styles'
import { FOOD_IMAGES } from './tile.images'
import Layout from '../../constants/layout'
import GameContext, { defaultContext } from '../../context/gameContext'
import Draggable from 'react-native-draggable'
import { consoleLogCurrentBoard } from "../../context//gameContext";


const Tile = (props) => {
    const gameContext = useContext(GameContext)

    const { img, index} = props;

    const tileWidth = Layout.width / 5

    const whileDrag = (event) => {
        // console.lo
        let startPosX = (event.touchHistory.touchBank[1].startPageX);
        let currentPosX = (event.touchHistory.touchBank[1].currentPageX);

        let startPosY = (event.touchHistory.touchBank[1].startPageY);
        let currentPosY = (event.touchHistory.touchBank[1].currentPageY);

        let startX = Math.round((startPosX - 0.5 * tileWidth) / tileWidth);
        let startY = Math.round((startPosY - 0.5 * tileWidth) / tileWidth - 3);

        let currentX = Math.round((currentPosX - 0.5 * tileWidth) / tileWidth);
        let currentY = Math.round((currentPosY - 0.5 * tileWidth) / tileWidth - 3);

        // console.log("X POSITIONS: " + startX + " " + currentX);
        // console.log("Y POSITIONS: " + startY + " " + currentY);


        if (currentX > startX) {
          // console.log("DRAGGED RIGHT");
        } else if (currentX < startX){
          // console.log("DRAGGED LEFT")
        }

        if (currentY > startY){
          // console.log("DRAGGED DOWN")
        }else if(currentY < startY){
          // console.log("DRAGGED UP")
        }

  
        if (currentPosX > startPosX + tileWidth / 2){
          // console.log("COLLIDED RIGHT");
          gameContext.updateBoard(startX, startY, 1, 0);

        }else if (currentPosX < startPosX - tileWidth / 2){
          // console.log("COLLIDED LEFT")
          gameContext.updateBoard(startX, startY, -1, 0);
        }

        if (currentPosY > startPosY + tileWidth / 2){
          // console.log("COLLIDED DOWN")
          gameContext.updateBoard(startX, startY, 0, 1);

        }else if(currentPosY < startPosY - tileWidth / 2){
          // console.log("COLLIDED TOP")
          gameContext.updateBoard(startX, startY, 0, -1);
        }
        // consoleLogCurrentBoard()
      }

    return (
      <View style={styles.tile}>
        <Draggable
        style={styles.tile}
          x={20}
          y={20}
          onDragRelease={event => whileDrag(event)}
          shouldReverse
        >
          <Image source={FOOD_IMAGES[img]} style={{ width: 40, height: 40 }} />
        </Draggable>
      </View>
    );
}

export default Tile