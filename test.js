// DON'T FORGET TO IMPORT TILE WIDTH:
// import { TILE_WIDTH } from "../components/SwappableGrid"
// export const condenseColumns = (tileData) => {
//     // Get number of rows and number of columns.
//     let numOfRows = tileData[0].length
//     let numOfCols = tileData.length
//     let spotsToFill = 0;
//     for (let i = 0; i < numOfRows; i++) {
//         spotsToFill = 0;
//         // Iterate through each column
//         for (let j = numOfCols - 1; j >= 0; j--) {
//             // Check to see if the element is a spot that needs filling.
//             if (tileData[i][j].markedAsMatch == true) {
//                 // Increment the spots to fill since we found a spot to fill.
//                 spotsToFill++;
//                 // Place the location above the top of the screen for when it "falls"
//                 tileData[i][j].location.setValue({
//                     x: TILE_WIDTH * i,
//                     y: -4 * TILE_WIDTH
//                 });
//             } else if (spotsToFill > 0) {
//                 // Move bean downward
//                 const currentSpot = tileData[i][j];
//                 const newSpot = tileData[i][j + spotsToFill];
//                 tileData[i][j] = newSpot;
//                 tileData[i][j + spotsToFill] = currentSpot;
//             }
//         }
//     }
// }