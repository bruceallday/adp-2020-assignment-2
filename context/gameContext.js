import { createContext } from 'react'

export const defaultContext = {
    // GAME CONTEXT HERE

    // EXAMPLE
    // player: 0,
    // togglePlayer: () => {
    //     if (defaultContext.player == 0) {
    //         defaultContext.player = 1;
    //     } else {
    //         defaultContext.player = 0;
    //     }
    // }

    currentBoard: [],
        updateBoard: board => {
            defaultContext.currentBoard = board
    },


    // swap: (i, j, directionI, directionJ) => {
    //     const swapStart = defaultContext.currentBoard[i][j]
    //     const swapEnd = defaultContext.currentBoard[i + directionI][j + directionJ]

    //     defaultContext.currentBoard[i][j] = swapEnd
    //     defaultContext.currentBoard[i + directionI][j + directionJ] = swapStart

    //     const board = defaultContext.currentBoard

    //     defaultContext.updateBoard(board);
    //     consoleLogContextBoard()
    //     console.log(defaultContext.currentBoard)
    // }
};

const consoleLogContextBoard = () => {
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
