import React, { useState } from 'react'
import { View, Image } from 'react-native'
import Grid from '../../components/grid/grid.component'
import { Level } from '../../components/level/level.component'

import { styles } from './game.styles'


export const GameScreen = () => {

    return(
        <View style={styles.root}>
            <Level />
            <Grid />
        </View>
    )
}