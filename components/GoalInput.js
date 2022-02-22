import React from 'react'
import { Button, StyleSheet, TextInput, View ,Modal} from "react-native";

export const GoalInput = ({onCancelGoal, setEnteredGoal, onAddGoal,goalInputHandler,enteredGoal, visibility}) => {

  const addGoalHandler = () => {
    onAddGoal(enteredGoal)
    setEnteredGoal('')
  }
  return (
    <Modal visible={visibility} animationType='slide'>
      <View style={styles.smallContainer}>
    <TextInput 
    placeholder='Course Goal' 
    style={styles.inputText} onChangeText={goalInputHandler} 
    value={enteredGoal}/>

    <View style={styles.buttonContainer}>
      <View style={styles.button}>
      <Button title='Cancel' color='red' onPress={onCancelGoal}/>
      </View>
  <View style={styles.button}>
  <Button title='ADD' onPress={addGoalHandler}/>
</View>
    </View>
    </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    smallContainer:{
      flex:1,
        justifyContent:'center',
        alignItems:'center'
      },
    inputText:{
        borderColor:'black',
        borderWidth: 1,
        width:'80%',
        padding:10,
        marginBottom:10
        
          },
          buttonContainer:{
            flexDirection:'row',
            justifyContent:'space-around',
            alignItems:'center',
            width:'60%'
          },
          button:{
width:'40%'
          }
})