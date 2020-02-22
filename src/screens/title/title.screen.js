import React from 'react'
import { View, Text, TouchableOpacity} from 'react-native'

import { styles } from './title.styles'

export const TitleScreen = (props) => {
    return(
        <View style={styles.root}>
            <Text>TITLE SCREEN</Text>
            <TouchableOpacity
                onPress={() => props.navigation.navigate('Game')}>
                <Text>Play</Text>
            </TouchableOpacity>
        </View>
    )
}

