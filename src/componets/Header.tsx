import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'

const Header = ({title}) => {
  return (
    <View style={styles.Container}>
        <StatusBar backgroundColor={"#007AFF"} barStyle={"light-content"} />
      <Text style={styles.Title}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  Container:{
    backgroundColor:"#007AFF",
    height:80,
    justifyContent:"center",
    alignItems:"center",
  },
  Title:{
    textAlign:"center",
    fontSize:20,
    color:"#ffff",
    fontWeight:"bold",

  },
  Icon:{},
})
