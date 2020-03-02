import { createContext } from 'react'
import { randomNumber } from '../utils/utils'
import { ITEM_OBJECTS } from '../components/tile/tile.images'

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
				defaultContext.condenseColumns(newBoard, allMatches)
			}
			
            // let i = 0;
            // for (i; i < 5; i++) {
            //   console.log(
            //     newBoard[i][0],
            //     newBoard[i][1],
            //     newBoard[i][2],
            //     newBoard[i][3],
            //     newBoard[i][4],
            //   );
            // }

            return {
              board: newBoard
            };
        }
	},

	markItemsAsMatch: (matches, boardData) => {
		matches.map(matchArr => {
			matchArr.map((element, index) => {
				element.map(item => {
					let i = item[0]
					let j = item[1]
					let MatchedItem = boardData[i][j]
					ITEM_OBJECTS[MatchedItem].match = true
					// console.log("MATCHED ITEM OBJECT", ITEM_OBJECTS[MatchedItem])
				})
			})
		})
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

	condenseColumns: (boardData, matches) => {
		let spacesToFill = 0
		matches.map((matchArr) => {
			matchArr.map((match) => {
				spacesToFill = match.length
				match.map((location) => {
					let i = location[0]
					let j = location[1]

					boardData[i][j] = -1

					// const currentSpot = boardData[i][j]
					// const newSpot = boardData[i][j + spacesToFill]

					// boardData[i][j] = newSpot
					// boardData[i][j + spacesToFill] = currentSpot

					console.log("SPACES TO FILL", spacesToFill)


				})
			})
		})
	}
};

export default createContext(defaultContext)
