import React, { useState, useContext } from 'react'
import { Text, View, TouchableOpacity, Image } from "react-native"
import Draggable from 'react-native-draggable'

import GameContext, { defaultContext } from "../../context/gameContext"
import Layout from "../../constants/layout"
import { randomNumber } from "../../utils/utils";
import { consoleLogCurrentBoard } from '../../context//gameContext'
import { styles } from "./grid.styles"

import Tile from "../tile/tile.component";

const Grid = () => {
    console.log("GRID RENDER")
    const gameContext = useContext(GameContext)

    gameContext.createBoard()
    // consoleLogCurrentBoard()
    
    return (
      <GameContext.Provider value={defaultContext}>
        <View style={styles.container}>
          {gameContext.currentBoard.map((row, index) =>
            row.map((item, j) => (
                  <Tile key={j} img={item} index={j} />
            ))
          )}
        </View>
      </GameContext.Provider>
    )
}

export default Grid 