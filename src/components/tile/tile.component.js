import React, { useContext } from 'react'
import { View } from "react-native"
import { styles } from './tile.styles'
import { ITEM_IMAGES } from './tile.images'
import Layout from '../../constants/layout'
import GameContext from '../../context/gameContext'
import Draggable from 'react-native-draggable'


const Tile = (props) => {

		let dX = 0;
		let dY = 0;

    const gameContext = useContext(GameContext);
    const { img, index} = props;
    const tileWidth = Layout.width / 5;

    const whileDrag = event => {
      let originX = 0;
			let originY = Layout.height - Layout.width - Layout.bottomClearenece;

      let startPosX = event.touchHistory.touchBank[1].startPageX;
      let startPosY = event.touchHistory.touchBank[1].startPageY;

      let currentPosX = event.touchHistory.touchBank[1].currentPageX;
      let currentPosY = event.touchHistory.touchBank[1].currentPageY;

      let startX = Math.round((startPosX - originX - 0.5 * tileWidth) / tileWidth);
      let startY = Math.round((startPosY - originY - 0.5 * tileWidth) / tileWidth);

      let currentX = Math.round((currentPosX - originX - 0.5 * tileWidth) / tileWidth);
      let currentY = Math.round((currentPosY - originY - 0.5 * tileWidth) / tileWidth);

			// console.log(currentX, currentY)
			// console.log("START POS   X,Y: " + startPosX + " " + startPosY);
      // console.log("END   POS   X,Y: " + currentPosX + " " + currentPosY);
      // console.log("START COORD X,Y: " + startX + " " + startY);
      // console.log("END   COORD X,Y: " + currentX + " " + currentY);

      // if (currentX > startX) {
      //   // console.log("DRAGGED RIGHT");
      // } else if (currentX < startX) {
      //   // console.log("DRAGGED LEFT")
      // }

      // if (currentY > startY) {
      //   // console.log("DRAGGED DOWN")
      // } else if (currentY < startY) {
      //   // console.log("DRAGGED UP")
			// }

      if (currentPosX > startPosX + tileWidth / 2) {
				dX = 1
				dY = 0
				gameContext.dispatch({
					type: "updateBoard",
					payload: { startX, startY, dX, dY }
				});
			}
			
			if (currentPosX < startPosX - tileWidth / 2) {
				dX = -1;
				dY = 0;
				gameContext.dispatch({
          type: "updateBoard",
          payload: { startX, startY, dX, dY }
        });
      }

      if (currentPosY > startPosY + tileWidth / 2) {
				dX = 0;
        dY = 1;
				gameContext.dispatch({
          type: "updateBoard",
          payload: { startX, startY, dX, dY }
        });
			}

			if (currentPosY < startPosY - tileWidth / 2) {
				dX = 0;
				dY = -1;
				gameContext.dispatch({
          type: "updateBoard",
          payload: { startX, startY, dX, dY }
        });
			}
    };

    return (
    	<View style={styles.tile}>
        <Draggable
          style={styles.tile}
          x={15}
          y={15}
          onDragRelease={whileDrag}
          shouldReverse={true}
          imageSource={ITEM_IMAGES[img]}
          style={{ width: 160, height: 160 }}
          renderSize={50}
        >
        </Draggable>
      </View>
    );
}

export default Tile