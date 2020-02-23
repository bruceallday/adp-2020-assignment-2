import React from 'react'
import { View } from 'react-native'

import { MainTitle } from '../../components/main-title/main-title.component'
import { Door } from '../../components/door/door.component'
import { EnterButton } from '../../components/EnterButton/enter-button.component'

import { styles } from './title.styles'

export const TitleScreen = (props) => {

    const { navigation } = props

    return(
        <View style={styles.root}>
            <MainTitle/>
            <Door />
            <EnterButton navigation={navigation} />
        </View>
    )
}

