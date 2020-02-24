import React from 'react'
import { View, Image } from 'react-native'

import { randomNumber } from '../../utils/utils'

import LevelImage from '../../../assets/level.png'
import LevelImage_1 from '../../../assets/level1.png'
import LevelImage_2 from '../../../assets/level2.png'

import Enemy from '../../../assets/Knight-Idle.gif'

import { styles } from './level.styles'

export const Level = () => {

    const randomBackground = () => {
        const images = [
            LevelImage,
            LevelImage_1,
            LevelImage_2,
        ]
        return images[randomNumber(3)]
    }

    const randomEnemy = () => {
        const images = [
            Enemy,
        ]

        return images[0]
    }
    return(
        <View style={styles.root}>
            <Image style={styles.enemyImg} source={randomEnemy()} />
            <Image style={styles.levelImg} source={randomBackground(3)} />
        </View>
    )
}