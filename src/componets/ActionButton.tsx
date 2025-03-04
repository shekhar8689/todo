import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const ActionButton = ({ onPress }: { onPress: any }) => {
    return (
        <TouchableOpacity
            style={styles.Button}
            activeOpacity={0.8}
            onPress={onPress}>
            <MaterialIcons name="add" style={styles.Icon} />
        </TouchableOpacity>
    )
}

export default ActionButton

const styles = StyleSheet.create({
    Button: {
        backgroundColor: "#007AFF",
        height: 80,
        width: 80,
        borderRadius: 80,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 53,
        right: 24,
    },
    Icon: {
        fontSize: 40,
        color: "white"
    }
})
