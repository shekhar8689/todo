import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { TodoData } from '../app/(tabs)';

const TodoCard = ({ title, time, isCompleted,onPressDelete }: TodoData & { onPressDelete: () => void }) => {
  const [isActive, setIsActive] = useState(isCompleted);
  return (
    <TouchableOpacity style={styles.Container}
      activeOpacity={0.9}
      onPress={() => setIsActive(!isActive)}>
      <View style={styles.TodoContainer}>
        <MaterialIcons name={isActive ? "radio-button-checked" : "radio-button-off"} size={24} color={isActive ? "#7A7777" : "black"} />
        <Text style={[isActive ? styles.InActiveTitle : styles.Title]}>
          {title}
        </Text>
      </View>
      <Text style={[styles.Time, isActive && { color: "#7A7777" }]}>
        {time.toString()}
      </Text>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPressDelete}
        style={[isActive? styles.InActiveDeleteButton : styles.DeleteButton]}>
        <MaterialIcons name='delete' style={styles.DeleteIcon} />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default TodoCard

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "rgba(32,31,31,0.2)",
    padding: 20,
    paddingRight:80,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 8,
    marginTop: 10,
  },
  Title: {
    fontSize: 18,
    color: "black",
    fontWeight: 500,
  },
  Time: {
    fontSize: 12,
    color: "black",
    fontWeight: 400,
    backgroundColor: "rgba(32,31,31,0.2)",
    borderRadius: 8,
    padding: 4,
    position: "absolute",
    top: -10,
    right: 40
  },
  DeleteButton: {
    backgroundColor:"rgba(32,31,31,0.2)",
    position: "absolute",
    padding: 4,
    height:25,
    width:25,
    borderRadius:25,
    top: -10,
    right: 8,
    justifyContent:"center",
    alignItems:"center"
  },
  InActiveTitle: {
    fontSize: 18,
    color: "#7A7777",
    fontWeight: 300,
    textDecorationLine: "line-through"
  },
  InActiveDeleteButton:{
    backgroundColor:"red",
    position: "absolute",
    padding: 4,
    height:25,
    width:25,
    borderRadius:25,
    top: -10,
    right: 8,
    justifyContent:"center",
    alignItems:"center"
  },
  TodoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  DeleteIcon: {
  },

})
