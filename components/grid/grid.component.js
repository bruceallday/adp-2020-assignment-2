import React, { useContext, useReducer } from 'react'
import { View } from "react-native"

import GameContext, { defaultContext } from "../../context/gameContext"
import { styles } from "./grid.styles"

import Tile from "../tile/tile.component";

const Grid = () => {

    console.log("GRID RENDER")
    const gameContext = useContext(GameContext)
    const reducer = gameContext.reducer
    const initialState = gameContext.initialState

    const [state, dispatch] = useReducer(reducer, initialState);
    gameContext.dispatch = dispatch

    // defaultContext.createBoard()
    
    return (
      <GameContext.Provider value={defaultContext}>
        <View style={styles.outerContainer}>
          <View style={styles.container}>
            {state.board.map((row, index) =>
              row.map((item, j) => <Tile key={j} img={item} index={j} />)
            )}
          </View>
        </View>
      </GameContext.Provider>
    );
}

export default Grid 