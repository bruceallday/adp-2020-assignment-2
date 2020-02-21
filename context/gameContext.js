import { createContext } from 'react'
import { randomNumber } from '../utils/utils'

export const defaultContext = {

    createBoard: () => {
        let board = []
        const boardSize = 5;
        const imageRange = 10;
        let i = 0;
        for (i; i < boardSize; i++) {
            let j = 0;
            board = [];
            for (j; j < boardSize; j++) {
                board[i][j] = randomNumber(imageRange);
            }
        }
        console.log(board)
        return board
    },

    initialState: {
        board: [[5, 6, 4, 4, 5], [3, 2, 3, 1, 9], [4, 7, 8, 6, 5], [1, 2, 3, 4, 5], [9, 2, 1, 4, 7]]
    },

    dispatch: () => {},
    reducer: (state, action) => {

        switch (action.type) {
        
          case "updateBoard":
            const { startX, startY, dX, dY } = action.payload;

            let newBoard = state.board;

            const swapStart = state.board[startX][startY];
            const swapEnd = state.board[startX + dX][startY + dY];

            newBoard[startX][startY] = swapEnd;
            newBoard[startX + dX][startY + dY] = swapStart;

            defaultContext.checkforMatches(newBoard)

            let i = 0;
            for (i; i < 5; i++) {
              console.log(
                newBoard[i][0],
                newBoard[i][1],
                newBoard[i][2],
                newBoard[i][3],
                newBoard[i][4],
              );
            }

            return {
              board: newBoard
            };
       
        }
	},

	checkforMatches : (board) => {
		let rowMatches = defaultContext.checkRowsForMatch(board)
		let columnMatches = defaultContext.checkColumnsForMatch(board)

		console.log(
			"ROWS = " + rowMatches,
			"COLUMNS = " + columnMatches
		)

		return [...rowMatches, ...columnMatches]
	},
	
	isMatch: (itemOne, itemTwo) => {
		if (itemOne !== null && itemTwo !== null) {
			if (itemOne === itemTwo) {
				return true
			} else {
				return false
			}
		}
	},



    checkRowsForMatch : (board) => {
		let matches = []
	 	board.map((row, i) => {
		
			let firstIndex = [0, i]
			let potentialMatch = [firstIndex]
			let currentImg = board[0][i]
			console.log("CURRENT IMAGE = " + currentImg)
			row.map((item, j) => {
				let nextItem = (j + 1) < 5 ? board[j + 1][i] : null
				if(defaultContext.isMatch(currentImg, nextItem)){
					potentialMatch.push([j+1, i])

				}else{
					if(potentialMatch.length >= 3){
						matches.push(potentialMatch)
					}
					firstIndex = [i + 1, j]
					potentialMatch = [firstIndex]
					currentImg = (j + 1) < 5 ? board[j + 1][i] : null
				}
			})
		})
		return matches
	},

	checkColumnsForMatch: (board) => {
		let matches = []
		board.map((row, i) => {

			let firstIndex = [i, 0]
			let potentialMatch = [firstIndex]
			let currentImg = board[i][0]
			console.log("CURRENT IMAGE = " + currentImg)
			row.map((item, j) => {
				let nextItem = (j + 1) < 5 ? board[i][j + 1] : null
				if (defaultContext.isMatch(currentImg, nextItem)) {
					potentialMatch.push([i, j + 1])

				} else {
					if (potentialMatch.length >= 3) {
						matches.push(potentialMatch)
					}
					firstIndex = [i, j + 1]
					potentialMatch = [firstIndex]
					currentImg = (j + 1) < 5 ? board[i][j + 1] : null
				}
			})
		})
		return matches
	},


	
};

export default createContext(defaultContext)
