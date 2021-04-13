import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList} from 'react-native';


export default function App(callbackfn, thisArg) {
    const [enteredGoal, setEnteredGoal] = useState('');
    const [listedGoals, setListedGoals] = useState([]);


    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);

    };

    const addGoalHandler = () => {
        setListedGoals(currentGoals => [...currentGoals,
            { id: Math.random().toString(), value: enteredGoal }
            ]);
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
        <Button title = "ADD" onPress={addGoalHandler}/>
        </View>
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={listedGoals}
            renderItem={itemData => (
                <View style={styles.listItem}>
                    <Text>{itemData.item.value}</Text>
                </View>
            )}
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
    },
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
});
