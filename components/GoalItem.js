import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const GoalItem = ({title, onDelete, id }) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onDelete.bind(this, id)}>
        <View style={styles.listItem}>
    <Text>{title}</Text>
    </View>
    </TouchableOpacity> 
  )
}

const styles = StyleSheet.create({
    listItem:{
        padding:10,
        backgroundColor:'#ccc',
        borderColor:'black',
        borderWidth:1,
        marginVertical:10,
        width:'80%',
      } 
})