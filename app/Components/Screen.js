import { StyleSheet, Text, View,Platform } from 'react-native'
import React from 'react'

export default function Screen({children,style}) {
  return (
    <View style={[style,styles.container]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop: Platform.OS === "android" ? 20 : 0
    }
})