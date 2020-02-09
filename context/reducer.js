import { useReducer } from 'react'

const initialBoard = () =>{
    let board = [];
    const boardSize = 5;
    const imageRange = 10;
    let i = 0;
    for (i; i < boardSize; i++) {
        let j = 0;
        board[i] = [];
        for (j; j < boardSize; j++) {
        board[i][j] = randomNumber(imageRange);
        }
    }
    return board
}

export function reducer(state, action) {
    switch (action.type) {
      case "DRAG UP":
          console.log("DRAGGED UP")
        return;
        break;

      case "DRAG DOWN":
          console.log("DRAGGED DOWN")
        return;
        break;

      case "DRAG LEFT":
          console.log("DRAGGED LEFT")
        return;
        break;

      case "DRAG RIGHT":
          console.log("DRAGGED RIGHT")
        return;
        break;
    }
}