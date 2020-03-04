import React, { useEffect } from 'react'
import { TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native' 

import { Audio } from 'expo-av'

import { styles } from './enter-button.styles'
import ButtonImage from '../../../assets/title-screen/button.gif'
import DoorSound from '../../../assets/sounds/door-opening.wav'

export const EnterButton = (props) =>{
    const { navDest } = props
    const navigation = useNavigation();

    const sound = new Audio.Sound()

    useEffect(() => { loadSound() }, [])

    const handlePlayback = async (soundStatus) =>{
        if (soundStatus.didJustFinish){
            await sound.stopAsync()
        }
    }

    const loadSound = async () => {
        await sound.loadAsync(DoorSound)
        sound.setOnPlaybackStatusUpdate(handlePlayback);
    }

    const playSound = async () => {
        console.log("PLAY SOUND")
        await sound.playAsync()
    }

    const handlePress = () => {
        playSound()
        navigation.navigate(navDest)
    }
    
    return(
        <TouchableOpacity style={styles.button}
            onPress={() => handlePress()}>
            <Image style={styles.img} source={ButtonImage} />
        </TouchableOpacity>
    )
}