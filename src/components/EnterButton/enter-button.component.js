import React, { useEffect } from 'react'
import { TouchableOpacity, Image } from 'react-native'
import { Audio } from 'expo-av'

import { styles } from './enter-button.styles'
import ButtonImage from '../../../assets/button.gif'
import DoorSound from '../../../assets/door-opening.wav'

export const EnterButton = (props) =>{

    const { navigation } = props

    const soundObject = new Audio.Sound()

    useEffect(() => { loadSound() }, [])

    const loadSound = async () => {
        await soundObject.loadAsync(DoorSound)
    }

    const playSound = async () => {
        await soundObject.playAsync()
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