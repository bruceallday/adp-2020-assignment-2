import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    root:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        position: 'relative',
        zIndex: 99,
        
    },

    levelImg: {
        width: '100%',
        resizeMode: "cover",
        position: 'absolute',
    },

    enemyImg:{
        // alignSelf: 'center',
        marginTop: '20%',
        marginRight: '15%',
        position: 'absolute',
        zIndex: 999,
    }
})