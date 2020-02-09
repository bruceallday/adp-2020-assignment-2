import { createContext } from 'react'
import { randomNumber } from '../utils/utils'

export const defaultContext = {
    // GAME CONTEXT HERE
    currentBoard: [],
        updateBoard: board => {
            defaultContext.currentBoard = board
    },

    createBoard : () => {
        const boardSize = 5;
        const imageRange = 10;
        let i=0;
        for(i;i<boardSize;i++){
            let j=0;
            defaultContext.currentBoard[i] = [];
            for(j;j<boardSize;j++){
                defaultContext.currentBoard[i][j] = randomNumber(imageRange);
            }
        }
    },

    swap: (i, j, directionI, directionJ) => {
        const swapStart = defaultContext.currentBoard[i][j]
        const swapEnd = defaultContext.currentBoard[i + directionI][j + directionJ]

        defaultContext.currentBoard[i][j] = swapEnd
        defaultContext.currentBoard[i + directionI][j + directionJ] = swapStart

        const board = defaultContext.currentBoard

        defaultContext.updateBoard(board);
        consoleLogContextBoard()
        console.log(defaultContext.currentBoard)
    }
};

const consoleLogCurrentBoard = () => {
    let i = 0;
    for (i; i < 5; i++) {
    console.log(
        "CONTEXT BOARD",
        defaultContext.currentBoard[i][0],
        defaultContext.currentBoard[i][1],
        defaultContext.currentBoard[i][2],
        defaultContext.currentBoard[i][3],
        defaultContext.currentBoard[i][4]
    );
    }
};

export default createContext(defaultContext)
