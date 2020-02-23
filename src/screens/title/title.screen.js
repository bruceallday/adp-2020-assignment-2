import React from 'react'
import { View, Text, TouchableOpacity, Image} from 'react-native'

import { MainTitle } from '../../components/main-title/main-title.component'
import ButtonImage from '../../../assets/button.gif'

import { styles } from './title.styles'

export const TitleScreen = (props) => {
    return(
        <View style={styles.root}>
            <MainTitle/>
            <TouchableOpacity
                style={styles.button}
                onPress={() => props.navigation.navigate('Game')}>
                <Image style={{ width: '70%', height: '70%', resizeMode: "cover"}} source={ButtonImage}/>
            </TouchableOpacity>
        </View>
    )
}

