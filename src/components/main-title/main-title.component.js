import React from 'react';
import { View, Image } from 'react-native'

import MainTitleImage from '../../../assets/title-screen/main-title.gif'
import { styles } from './main-title.styles' 

export const MainTitle = () => {
    return(
        <View style={styles.root}>
            <Image
                source={MainTitleImage}
                style={styles.title}
             />
        </View>
    )
}