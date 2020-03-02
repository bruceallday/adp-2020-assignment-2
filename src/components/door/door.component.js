import React from 'react'
import { View , Image} from 'react-native'

import DoorImage from '../../../assets/title-screen/title-door-image.gif'
import { styles } from './door.styles'

export const Door = () => {
    return(
        <View style={styles.root}>
            <Image style={styles.img} source={DoorImage} />
        </View>
    )
}