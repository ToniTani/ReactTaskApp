import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList} from 'react-native';
import TaskItem from './components/TaskItem'
import TaskInput from './components/TaskInput'


export default function App(callbackfn, thisArg) {
    const [listedGoals, setListedGoals] = useState([]);
    const [isAddMode, setAddMode] = useState(false);

    const addGoalHandler = taskName => {
        setListedGoals(currentGoals => [...currentGoals,
            { id: Math.random().toString(), value: taskName }
            ]);
    };

    const removeTaskHandler = taskId => {
        setListedGoals(currentTasks => {
            return currentTasks.filter((task) => task.id !== taskId);
        });
    };


    return (
    <View style={styles.container}>
        <Button title="Add New Task" onPress={setAddMode.true}/>
        <TaskInput visible={isAddMode} onAddGoal={addGoalHandler}/>
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={listedGoals}
            renderItem={itemData => <TaskItem id={itemData.item.id} onDelete={removeTaskHandler} title={itemData.item.value}/> }
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#40d6ff',
        padding: 50
    },

});
