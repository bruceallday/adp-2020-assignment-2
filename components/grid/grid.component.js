import React, { useState, useContext } from 'react'
import { Text, View, TouchableOpacity, Image} from "react-native"
import Layout from '../../constants/layout'
import { styles } from './grid.styles'

import GameContext, { defaultContext } from '../../context/gameContext'

import GestureRecognizer, {
  swipeDirections
} from "react-native-swipe-gestures"

import Tile from '../tile/tile.component'

const Grid = () => {

    const gameContext = useContext(GameContext)

    const randomNumber = int => {
        let num = Math.floor(Math.random() * int)
        return num;
    };

    // const board = new Array(25).fill(0)
    const board = [];
    const boardSize = 5;
    const imageRange = 10;
    let i=0;
    for(i;i<boardSize;i++){
        let j=0;
        board[i]=[]
        for(j;j<boardSize;j++){
            board[i][j] = randomNumber(imageRange);
        }
    }
    
    const tileWidth = Layout.width / 5

    const onSwipe = (gestureName, gestureState) => {
        const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections

        let initialX = gestureState.x0;
        let initialY = gestureState.y0;

        let i = Math.round((initialX - 0.5 * tileWidth) / tileWidth)
        let j = Math.round((initialY - 0.5 * tileWidth) / tileWidth)

        console.log(i, j)

        switch(gestureName){
            case SWIPE_UP:
                console.log("SWIPE UP")
                swap(i, j, 0, -1)
                break;
                
            case SWIPE_DOWN:
                console.log("Swiped down")
                swap(i, j, 0, 1)
                break;

            case SWIPE_LEFT:
                console.log("SWIPED LEFT")
                swap(i, j, -1, 0)
                break;

            case SWIPE_RIGHT:
                console.log("SWIPED RIGHT")
                swap(i, j, 1, 0)
                break;
        }
    }
    const consoleLogBoard=()=>{
        let i =0;
        for(i;i<5;i++){
            console.log(
              board[i][0],
              board[i][1],
              board[i][2],
              board[i][3],
              board[i][4],
            );
        }
    }
    consoleLogBoard();

    
    const swap = (i, j, di, dj) => {
        const swapStarter = board[i][j];
        const swapEnder = board[i + di][j + dj];

        board[i][j] = swapEnder;
        board[i + di][j + dj] = swapStarter;

        consoleLogBoard();
    };

    const config = {
        velocityThreshold: 0.01,
        directionalOffsetThreshold: 80
    };
    
    return (
      <GameContext.Provider value={defaultContext}>
        <GestureRecognizer
            style={styles.container}
            onSwipe={onSwipe}
            config={config}
            >
            {board.map((row, index) =>
                row.map((item, j) => 
                    <Tile key={j} img={item} />)
            )}
        </GestureRecognizer>
      </GameContext.Provider>
    );
        
        
}

export default Grid 