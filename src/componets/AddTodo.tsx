import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal'

const AddTodo = ({
    isActive,
    onClose,
    value,
    onChangeText,
    onPressSubmit,
}:{
    isActive:boolean;
    onClose:any;
    value:string;
    onChangeText:(item:string)=>void;
    onPressSubmit:()=> void;
}) => {
  return (
    <Modal isVisible={isActive} style={styles.Model} onBackButtonPress={onClose} onBackdropPress={onClose}>
      <View style={styles.Container}>
        <Text style={styles.Title}> Add Todo</Text>
        <TextInput style={styles.InputContainer} placeholder='Enter your Name' value={value}  onChangeText={onChangeText}/>
        <TouchableOpacity style={styles.Button} onPress={onPressSubmit}>
            <Text style={styles.ButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  )
}

export default AddTodo

const styles = StyleSheet.create({
  Model:{
    margin:0,
    justifyContent:"flex-end",
    

  },
  Container:{
    padding:20,
    backgroundColor:"white",
    borderTopStartRadius:20,
    borderTopEndRadius:20,
    gap:20,

  },
  Title:{
    fontSize:24,
    color:"black",
    fontWeight:"bold"
  },
  InputContainer:{
    borderWidth:1,
    paddingHorizontal:20,
    paddingVertical:20,
    borderRadius:10,
    fontSize:16,
    color:"black",
    borderColor:"black"
  },
  Button:{
    backgroundColor:"#007AFF",
    padding:20,
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center",
  },
  ButtonText:{
    textAlign:"center",
    fontSize:16,
    fontWeight:500,
    color:"white",
    textTransform:"uppercase"
  },

  
})
