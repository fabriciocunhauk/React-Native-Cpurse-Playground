import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
    const [counter, setCounter] = useState(0)

    return (
        <View>
            <Button title="Increace" onPress={() => setCounter(counter + 1)} />
            <Button title="Decreace" onPress={() => setCounter(counter - 1)} />
            <Text>Current Count: {counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default CounterScreen;