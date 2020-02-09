import React, { useState, useContext } from 'react'
import { Text, View, TouchableOpacity, Image, Animated} from "react-native"
import { styles } from '../tile/tile.styles'
import { FOOD_IMAGES } from './tile.images'
import Layout from '../../constants/layout'
import GameContext, { defaultContext } from '../../context/gameContext'
import Draggable from 'react-native-draggable'
// import Draggable from "react-native-draggable"


const Tile = (props) => {

    const gameContext = useContext(GameContext)

    const { img, item, location } = props;

    const tileWidth = Layout.width / 5

    const dragIndex = (event) => {
      
        // console.log(event);

        console.log("current x "+event.touchHistory.touchBank[1].currentPageX); 
        console.log("start x " + event.touchHistory.touchBank[1].startPageX);

        console.log("current y "+event.touchHistory.touchBank[1].currentPageY);
        console.log("start y " + event.touchHistory.touchBank[1].startPageY);

        let startX = event.touchHistory.touchBank[1].startPageX;
        let currentX = event.touchHistory.touchBank[1].currentPageX;

         let startY= event.touchHistory.touchBank[1].startPageY;
         let currentY = event.touchHistory.touchBank[1].currentPageY;

        if (currentX > startX) {
          console.log("DRAGGED RIGHT");
        } else if (currentX < startX){
          console.log("DRAGGED LEFT")
        }

        if (currentY > startY){
          console.log("DRAGGED DOWN")
        }else if(currentY < startY){
          console.log("DRAGGED UP")
        }

        if (currentX > startX + tileWidth / 2){
          console.log("COLLIDED RIGHT");
        }else if (currentX < startX - tileWidth / 2){
          console.log("COLLIDED LEFT")
        }

        if (currentY > startY + tileWidth / 2){
          console.log("COLLIDED BOTTOM")
        }else if(currentY < startY - tileWidth / 2){
          console.log("COLLIDED TOP")
        }


            


      
        // console.log( "CURRENT X:" + event.touchHistory.touchBank[1].currentPageX);
        // console.log( "CURRENT Y:" + event.touchHistory.touchBank[1].currentPageY);

        // console.log("LOCATION X:" + event.nativeEvent.changedTouches[0].locationX);
        // console.log(
        //   "LOCATION Y:" + event.nativeEvent.changedTouches[0].locationY
        // );

        let initialX = event.touchHistory.touchBank[1].currentPageX;
        let initialY = event.touchHistory.touchBank[1].currentPageY;

        let i = Math.round((initialX - 0.5 * tileWidth) / tileWidth)
        let j = Math.round((initialY - 0.5 * tileWidth) / tileWidth)


        // console.log(i, j)

        // switch(gestureName){
        // case SWIPE_UP:
        //     console.log("SWIPE UP")
        //     gameContext.swap(i, j, 0, -1)
        //     break;
            
        // case SWIPE_DOWN:
        //     console.log("Swiped down")
        //     gameContext.swap(i, j, 0, -1)
        //     break;

        // case SWIPE_LEFT:
        //     console.log("SWIPED LEFT")
        //     gameContext.swap(i, j, -1, 0);
        //     break;

        // case SWIPE_RIGHT:
        //     console.log("SWIPED RIGHT")
        //     gameContext.swap(i, j, 0, -1)
        //     break;
    }

      

    return (
      <View style={styles.tile}>
        <Draggable
          x={20}
          y={20}
          onDrag={event => dragIndex(event)}
          onRelease={event => dragIndex(event)}
          shouldReverse
        >
          <Image source={FOOD_IMAGES[img]} style={{ width: 40, height: 40 }} />
        </Draggable>
      </View>
    );
}

export default Tile