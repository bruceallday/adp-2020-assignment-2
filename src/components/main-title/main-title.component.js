import React from 'react';
import { View, Image } from 'react-native'
import MainTitleImage from '../../../assets/main-title.gif'

import { styles } from './main-title.styles' 


export const MainTitle = () => {

    return(
        <View style={styles.root}>
            <Image
                source={MainTitleImage}
                style={{/* width: 350, height: 170, resizeMode: "cover"*/}}
                style={{ width: '100%', height: '70%', resizeMode: "cover" }}

             />
        </View>
    )
}