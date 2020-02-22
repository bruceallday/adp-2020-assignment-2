import React from 'react'
import { View, Text, TouchableOpacity} from 'react-native'

import { styles } from './title.styles'

export const TitleScreen = (props) => {
    return(
        <View style={styles.root}>
            <Text style={styles.text}>TITLE SCREEN</Text>
            <TouchableOpacity
                style={styles.text}
                onPress={() => props.navigation.navigate('Game')}>
                <Text style={styles.text}>Play</Text>
            </TouchableOpacity>
        </View>
    )
}

