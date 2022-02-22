import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button,  FlatList } from 'react-native';
import { GoalItem } from "./components/GoalItem";
import { GoalInput } from "./components/GoalInput";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false)

const goalInputHandler = (enteredText) => {
  setEnteredGoal(enteredText)
  
}

const addGoalHandler = () => {  
setCourseGoals(currentGoals => [
  ...currentGoals,
   { id: Math.random().toString(), value: enteredGoal}
  ])
setIsAddMode(false)
  
}

const removeGoalHandler = (goalId) => {
  setCourseGoals(currentGoals => {
    return currentGoals.filter((goal) => goal.id !== goalId )
  })
}

const cancelAddGoalHandler = () => {
  setIsAddMode(false)
}

  return (
    <View style={styles.container}>
      <Button title='Add Goal' onPress={() => setIsAddMode(true)}/>
      <GoalInput goalInputHandler={goalInputHandler}
      visibility={isAddMode}
       onAddGoal={addGoalHandler} 
       value={enteredGoal}
       onCancelGoal={cancelAddGoalHandler}
       setEnteredGoal={setEnteredGoal}
      />
      <FlatList 
      //keyExtractor={(item, index) => item.id}
      data={courseGoals} 
      renderItem={itemData =>  (
        <GoalItem 
        id={itemData.item.id}
         title={itemData.item.value}  
         onDelete={removeGoalHandler}/>
      )
      }>

      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    padding:30
  },
  
  
  
});


