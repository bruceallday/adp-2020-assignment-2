import React from 'react'
import { View, Image } from 'react-native'

import { randomNumber } from '../../utils/utils'

import LevelImage from '../../../assets/level.png'
import LevelImage_1 from '../../../assets/level1.png'
import LevelImage_2 from '../../../assets/level2.png'

import Enemy from '../../../assets/enemies/Knight-Idle.gif'
import Enemy2 from '../../../assets/enemies/ready_1.gif'
// import Enemy3 from '../../../assets//enemies/imp_big.gif'

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
            Enemy2,
            // Enemy3,
        ]

        return images[randomNumber(2)]
    }
    return(
        <View style={styles.root}>
            <Image style={styles.enemyImg} source={randomEnemy()} />
            <Image style={styles.levelImg} source={randomBackground()} />
        </View>
    )
}