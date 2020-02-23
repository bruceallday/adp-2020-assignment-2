import React, { useEffect } from 'react'
import { TouchableOpacity, Image } from 'react-native'
import { Audio } from 'expo-av'

import { styles } from './enter-button.styles'
import ButtonImage from '../../../assets/button.gif'
import DoorSound from '../../../assets/sounds/door-opening.wav'

export const EnterButton = (props) =>{

    const { navigation } = props

    const sound = new Audio.Sound()

    useEffect(() => { loadSound() }, [])

    const loadSound = async () => {
        await sound.loadAsync(DoorSound)
    }

    const playSound = () => {
        sound.playAsync(DoorSound)
    }

    const handlePress = () => {
        playSound()
        navigation.navigate('Game')
    }
    
    return(
        <TouchableOpacity style={styles.button}
            onPress={() => handlePress()}>
            <Image style={styles.img} source={ButtonImage} />
        </TouchableOpacity>
    )
}