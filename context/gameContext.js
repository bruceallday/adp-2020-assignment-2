import { createContext } from 'react'
import { randomNumber } from '../utils/utils'

export const defaultContext = {
         // GAME CONTEXT HERE
         currentBoard: [],
         updateBoard: (startX, startY, dX, dY) => {  
             
        let tempBoard = defaultContext.currentBoard;

        let previousIndex = defaultContext.currentBoard[startX][startY]
        console.log(previousIndex)
        let nextIndex = defaultContext.currentBoard[startX + dX][startY + dY]

        tempBoard[startX + dX][startY + dY] = previousIndex
        tempBoard[startX][startY] = nextIndex

        defaultContext.currentBoard = tempBoard
        console.log('------------------------------')
        consoleLogCurrentBoard();
        console.log("------------------------------");

        defaultContext.updateRefresh()

    },

        createBoard: () => {
            const boardSize = 5;
            const imageRange = 10;
            let i = 0;
            for (i; i < boardSize; i++) {
                let j = 0;
                defaultContext.currentBoard[i] = [];
                for (j; j < boardSize; j++) {
                defaultContext.currentBoard[i][j] = randomNumber(imageRange);
                }
            }
        },
    };

export const consoleLogCurrentBoard = () => {
    let i = 0;
    for (i; i < 5; i++) {
    console.log(
        defaultContext.currentBoard[i][0],
        defaultContext.currentBoard[i][1],
        defaultContext.currentBoard[i][2],
        defaultContext.currentBoard[i][3],
        defaultContext.currentBoard[i][4],
    );
    }
};

export default createContext(defaultContext)
