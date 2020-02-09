import { createContext } from 'react'
import { randomNumber } from '../utils/utils'

export const defaultContext = {
         // GAME CONTEXT HERE
         currentBoard: [],

         updateBoard: (i, j, directionI, directionJ) => {    
             
            // console.log(i, j)
            // console.log(directionI, directionJ);

            let ni = i - 0.5
            console.log(ni)
            // const swapStart = defaultContext.currentBoard[i - 1][j - 1]
            //  console.log(swapStart);   
            // const swapEnd = defaultContext.currentBoard[i][j]
            //  console.log(swapEnd);   

            // defaultContext.currentBoard[i][j] = swapEnd
            // defaultContext.currentBoard[i + directionI][j + directionJ] = swapStart

            // consoleLogCurrentBoard();
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
        defaultContext.currentBoard[i][4]
    );
    }
};

export default createContext(defaultContext)
