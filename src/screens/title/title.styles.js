import { StyleSheet } from 'react-native'
import Layout from '../../constants/layout'

export const styles = StyleSheet.create({

    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#181425",
    },

    text: {
        color: '#e43b44',
    },

    button:{
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        color: '#e43b44',
        width: '60%',
        height: '10%',
    },


}) 
