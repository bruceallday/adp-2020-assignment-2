import React, { useState, useContext } from 'react'
import { Text, View, TouchableOpacity, Image } from "react-native"
import Draggable from 'react-native-draggable'

// S W I P E  G E N S T U R E S
// import GestureRecognizer, {
//   swipeDirections
// } from "react-native-swipe-gestures";

import GameContext, { defaultContext } from "../../context/gameContext"
import Layout from "../../constants/layout"
import { randomNumber } from "../../utils/utils";
import { styles } from "./grid.styles"

import Tile from "../tile/tile.component";


const Grid = () => {

    const gameContext = useContext(GameContext)

    gameContext.currentBoard = [];
    const boardSize = 5;
    const imageRange = 10;
    let i=0;
    for(i;i<boardSize;i++){
        let j=0;
        gameContext.currentBoard[i] = [];
        for(j;j<boardSize;j++){
            gameContext.currentBoard[i][j] = randomNumber(imageRange);
        }

    }

    // S W I P E  G E S T U R E S 
    
    // const tileWidth = Layout.width / 5

    // const onSwipe = (gestureName, gestureState) => {
    //     const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections

    //     let initialX = gestureState.x0;
    //     let initialY = gestureState.y0;

    //     let i = Math.round((initialX - 0.5 * tileWidth) / tileWidth)
    //     let j = Math.round((initialY - 0.5 * tileWidth) / tileWidth)

    //     console.log(i, j)


    //     switch(gestureName){
    //         case SWIPE_UP:
    //             console.log("SWIPE UP")
    //             gameContext.swap(i, j, 0, -1)
    //             break;
                
    //         case SWIPE_DOWN:
    //             console.log("Swiped down")
    //             gameContext.swap(i, j, 0, -1)
    //             break;

    //         case SWIPE_LEFT:
    //             console.log("SWIPED LEFT")
    //             gameContext.swap(i, j, -1, 0);
    //             break;

    //         case SWIPE_RIGHT:
    //             console.log("SWIPED RIGHT")
    //             gameContext.swap(i, j, 0, -1)
    //             break;
    //     }
    // }


    const consoleLogBoard = () => {
        let i = 0;
        for (i; i < 5; i++) {
            console.log(
            "GRID BOARD",
            defaultContext.currentBoard[i][0],
            defaultContext.currentBoard[i][1],
            defaultContext.currentBoard[i][2],
            defaultContext.currentBoard[i][3],
            defaultContext.currentBoard[i][4]
            )
        }
    }

    consoleLogBoard();

    // const config = {
    //     velocityThreshold: 0.01,
    //     directionalOffsetThreshold: 80
    // }
    
    return (
      <GameContext.Provider value={defaultContext}>
        {/* CHANGE to <GestureRecognizer/> for swipable*/}
        <View
          style={styles.container}
          //   onSwipe={onSwipe}
          //   config={config}
        >
          {gameContext.currentBoard.map((row, index) =>
            row.map((item, j) => (
                  <Tile key={j} img={item} />
            ))
          )}
        </View>
      </GameContext.Provider>
    );
        
        
}

export default Grid 