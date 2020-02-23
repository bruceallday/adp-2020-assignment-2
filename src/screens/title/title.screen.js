import React, { useEffect } from 'react'
import { View } from 'react-native'
import { Audio } from 'expo-av'

import { MainTitle } from '../../components/main-title/main-title.component'
import { Door } from '../../components/door/door.component'
import { EnterButton } from '../../components/EnterButton/enter-button.component'

import PianoSound from '../../../assets/sounds/piano.wav'
import { styles } from './title.styles'

export const TitleScreen = (props) => {

    const { navigation } = props

    const sound = new Audio.Sound()

    const playSound = async () => {
        await sound.playAsync()
    }

    const loadSound = async () => {
        await sound.loadAsync(PianoSound)
        playSound()
    }

    useEffect(() => { 
        loadSound()
    }, [])

    return(
        <View style={styles.root}>
            <MainTitle/>
            <Door />
            <EnterButton navigation={navigation} />
        </View>
    )
}

