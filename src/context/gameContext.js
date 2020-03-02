import { createContext } from 'react'
import { randomNumber } from '../utils/utils'
import { ITEM_OBJECTS } from '../components/tile/tile.images'
import { condenseColumns } from '../../test';

export const defaultContext = {

    createBoard: () => {
        let board = []
        const boardSize = 5;
        const imageRange = 5;
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
        board: [[0, 7, 3, 4, 5], [3, 4, 5, 4, 1], [2, 1, 3, 2, 5], [6, 5, 7, 4, 2], [2, 6, 4, 7, 3]]
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

			let allMatches = defaultContext.checkforMatches(newBoard)

			if (allMatches.length != 0){
				defaultContext.removeMatches(newBoard, allMatches)
				defaultContext.condenseColumns(newBoard)
			}
			
            return {
              board: newBoard
            };
        }
	},

	// markItemsAsMatch: (matches, boardData) => {
	// 	matches.map(matchArr => {
	// 		matchArr.map((element, index) => {
	// 			element.map(item => {
	// 				let i = item[0]
	// 				let j = item[1]
	// 				let MatchedItem = boardData[i][j]
	// 				ITEM_OBJECTS[MatchedItem].match = true
	// 				// console.log("MATCHED ITEM OBJECT", ITEM_OBJECTS[MatchedItem])
	// 			})
	// 		})
	// 	})
	// },

	isMatch: (itemOne, itemTwo) => {
		if (itemOne !== null && itemTwo !== null) {
			if (itemOne === itemTwo) {
				return true
			} else {
				return false
			}
		}
	},

	checkforMatches : (board) => {
		let rowMatches = defaultContext.checkRowsForMatch(board)
		let columnMatches = defaultContext.checkColumnsForMatch(board)

		return [rowMatches, columnMatches]
	},
	
    checkRowsForMatch : (board) => {
		let matches = []

	 	board.map((row, i) => {
			let firstIndex = [0, i]
			let potentialMatch = [firstIndex]
			let currentImg = board[0][i]

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

	removeMatches: (boardData, matches) => {
		matches.map((matchArr) => {
			matchArr.map((match) => {
				match.map((location) => {
					let i = location[0]
					let j = location[1]

					boardData[i][j] = -1

				})
			})
		})
		console.log("FINISHED BOARD CHECK FOR MATCHED")
	},

	condenseColumns: (newBoard) => {
    let numOfRows = newBoard[0].length
    let numOfCols = newBoard.length
    let spotsToFill = 0;
    for (let i = 0; i < numOfRows; i++) {
        spotsToFill = 0;
        // Iterate through each column
        for (let j = numOfCols - 1; j >= 0; j--) {
            // Check to see if the element is a spot that needs filling.
            if (newBoard[i][j] === -1) {
                // Increment the spots to fill since we found a spot to fill.
                spotsToFill++;
                // Place the location above the top of the screen for when it "falls"

            } else if (spotsToFill > 0) {
                // Move bean downward
                const currentSpot = newBoard[i][j];
                const newSpot = newBoard[i][j + spotsToFill];
                newBoard[i][j] = newSpot;
                newBoard[i][j + spotsToFill] = currentSpot;
            }
        }
    }
	}
};

export default createContext(defaultContext)
