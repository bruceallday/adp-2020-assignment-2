import { StyleSheet } from "react-native"
import Layout from '../../constants/layout'
// import Layout from '@constans/layout' 

export const styles = StyleSheet.create({
         tile: {
           width: Layout.width / 5,
           height: Layout.width / 5,
           alignItems: "center",
           justifyContent: "center",
           borderWidth: 1,
           borderColor: "#e43b44",
         },
       });
