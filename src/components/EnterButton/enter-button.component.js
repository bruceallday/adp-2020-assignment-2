import React from 'react'
import { TouchableOpacity, Image } from 'react-native'

import { styles } from './enter-button.styles'
import ButtonImage from '../../../assets/button.gif'

export const EnterButton = (props) =>{

    const { navigation } = props
    
    return(
        <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate('Game')}>
            <Image style={styles.img} source={ButtonImage} />
        </TouchableOpacity>
    )
}