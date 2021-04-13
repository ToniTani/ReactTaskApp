import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';


export default function App(callbackfn, thisArg) {
    const [enteredGoal, setEnteredGoal] = useState('');
    const [listedGoals, setListedGoals] = useState([]);


    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);

    };

    const addGoalHandler = () => {
        setListedGoals(currentGoals => [...currentGoals, enteredGoal]);
    };


    return (
    <View style={styles.container}>
        <View style={styles.inputContainer}>
        <TextInput
            placeholder="Goals"
            style={styles.input}
            onChangeText={goalInputHandler}
            value={enteredGoal}
        />
        <Button title = "Add" onPress={addGoalHandler}/>
        </View>
        <View>
            {listedGoals.map((goal) => <Text key={goal}>{goal}</Text>)}
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#40d6ff',
        padding: 50
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
    }
});
