import React, { useContext } from 'react'
import { View } from "react-native"
import { styles } from '../tile/tile.styles'
import { FOOD_IMAGES } from './tile.images'
import Layout from '../../constants/layout'
import GameContext from '../../context/gameContext'
import Draggable from 'react-native-draggable'


const Tile = (props) => {

    const gameContext = useContext(GameContext)
    const { img, index} = props;
    const tileWidth = Layout.width / 5

    const whileDrag = event => {
      let originX = 0;
			let originY = Layout.height - Layout.width - Layout.bottomClearenece

			let dragDirection



      let startPosX = event.touchHistory.touchBank[1].startPageX;
      let startPosY = event.touchHistory.touchBank[1].startPageY;

      let currentPosX = event.touchHistory.touchBank[1].currentPageX;
      let currentPosY = event.touchHistory.touchBank[1].currentPageY;

      let startX = Math.round((startPosX - originX - 0.5 * tileWidth) / tileWidth) ;
      let startY = Math.round((startPosY - originY - 0.5 * tileWidth) / tileWidth) ;

      let currentX = Math.round((currentPosX - originX - 0.5 * tileWidth) / tileWidth) ;
      let currentY = Math.round((currentPosY - originY - 0.5 * tileWidth) / tileWidth);

			console.log(currentX, currentY)
			console.log("START POS   X,Y: " + startPosX + " " + startPosY);
      console.log("END   POS   X,Y: " + currentPosX + " " + currentPosY);
      console.log("START COORD X,Y: " + startX + " " + startY);
      console.log("END   COORD X,Y: " + currentX + " " + currentY);

      if (currentX > startX) {
        // console.log("DRAGGED RIGHT");
      } else if (currentX < startX) {
        // console.log("DRAGGED LEFT")
      }

      if (currentY > startY) {
        // console.log("DRAGGED DOWN")
      } else if (currentY < startY) {
        // console.log("DRAGGED UP")
			}

      if (currentPosX > startPosX + tileWidth / 2) {
        console.log("COLLIDED RIGHT");
        dragDirection = "RIGHT";
      }
			if (currentPosX < startPosX - tileWidth / 2) {
				// console.log("COLLIDED LEFT")
					dragDirection = 'LEFT'
      }

      if (currentPosY > startPosY + tileWidth / 2) {
				// console.log("COLLIDED DOWN")
					dragDirection = 'DOWN'
			}
			if (currentPosY < startPosY - tileWidth / 2) {
				// console.log("COLLIDED TOP")
					dragDirection = 'UP'
			}

			switch (dragDirection){
				case 'UP':
					gameContext.dispatch({
            type: "updateBoard",
            payload: { startX, startY, currentX, currentY }
          });
				
				case 'DOWN':
					gameContext.dispatch({
            type: "updateBoard",
            payload: { startX, startY, currentX, currentY }
          });

				case 'LEFT':
					gameContext.dispatch({
            type: "updateBoard",
            payload: { startX, startY, currentX, currentY }
          });

				case 'RIGHT':
					gameContext.dispatch({
            type: "updateBoard",
            payload: { startX, startY, currentX, currentY }
          });

        }
    };

    return (
      <View style={styles.tile}>
        <Draggable
          style={styles.tile}
          x={20}
          y={20}
          onDragRelease={whileDrag}
          shouldReverse={true}
          imageSource={FOOD_IMAGES[img]}
          style={{ width: 40, height: 40 }}
        >
        </Draggable>
      </View>
    );
}

export default Tile