import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text, textStyle, buttonStyle}) => {
  return (
    <View style={{width: '100%'}}>
      <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
        <Text style={[styles.text, textStyle]}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    button:{
        width: '100%',
        paddingVertical: 16,
    },
    text:{
        textAlign: "center",
    }
})