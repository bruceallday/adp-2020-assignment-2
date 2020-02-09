import React, { useState, useContext } from 'react'
import { Text, View, TouchableOpacity, Image } from "react-native"
import Draggable from 'react-native-draggable'

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

    // const consoleLogBoard = () => {
    //     let i = 0;
    //     for (i; i < 5; i++) {
    //         console.log(
    //         "GRID BOARD",
    //         defaultContext.currentBoard[i][0],
    //         defaultContext.currentBoard[i][1],
    //         defaultContext.currentBoard[i][2],
    //         defaultContext.currentBoard[i][3],
    //         defaultContext.currentBoard[i][4]
    //         )
    //     }
    // }

    // consoleLogBoard();

    return (
      <GameContext.Provider value={defaultContext}>
        <View style={styles.container}>
          {gameContext.currentBoard.map((row, index) =>
            row.map((item, j) => (
                  <Tile key={j} img={item} />
            ))
          )}
        </View>
      </GameContext.Provider>
    )
}

export default Grid 