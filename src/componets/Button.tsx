import { View, Text, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from 'react-native'
import React from 'react'

const Button = ({ onPress,title,containerStyle,textStyle }: { onPress: any,title:string,containerStyle?:ViewStyle,textStyle?: TextStyle }) => {
    return (
        <TouchableOpacity
        activeOpacity={0.7}
         style={[styles.ButtonContainer,containerStyle]} onPress={onPress}>
            <Text style={[styles.ButtonText,textStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    ButtonContainer: {
        marginTop: 10,
        padding: 10,
        borderRadius: 80,
        backgroundColor: "#007AFF",
        alignItems: "center"
    },
    ButtonText: {
        padding: 5,
        color: "white",
        fontSize: 20,
        fontWeight: "500"
    }
})
