import React from 'react'
import { Text, View, TouchableOpacity, Image } from "react-native";
import { styles } from '../tile/tile.styles'
import { FOOD_IMAGES } from './tile.images'
import Draggable from "react-native-draggable";

const Tile = (props) => {

    const { img } = props

    return (
      <View style={styles.tile}>
        <Draggable x={20} y={20} shouldReverse>
          <Image source={FOOD_IMAGES[img]} style={{ width: 40, height: 40 }} />
        </Draggable>
      </View>
    );
}

export default Tile