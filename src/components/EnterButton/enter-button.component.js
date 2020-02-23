import React, { useEffect } from 'react'
import { TouchableOpacity, Image } from 'react-native'
import { Audio } from 'expo-av'

import { styles } from './enter-button.styles'
import ButtonImage from '../../../assets/button.gif'
import DoorSound from '../../../assets/door-opening.wav'

export const EnterButton = (props) =>{

    const { navigation } = props

    // since the code for playing a sound is short
    // i am just going to leave it here
    const soundObject = new Audio.Sound()
    const loadSound = async () => {
        try {
            await soundObject.loadAsync(DoorSound)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => { loadSound() }, [])
    const playSound = async () => {
        try {
            await soundObject.playAsync()
        } catch (error) {
            console.log(error)
            // error but meh, just log it
        }
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