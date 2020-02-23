import { StyleSheet } from 'react-native'
import Layout from '../../constants/layout'

export const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        marginTop: Layout.height - Layout.width - Layout.bottomClearenece,
        height: Layout.width,
    },

    outerContainer:{
        width: '100%',
        height: '100%',
        backgroundColor: '#000000',
    }
}) 