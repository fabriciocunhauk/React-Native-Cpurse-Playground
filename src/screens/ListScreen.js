import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const navigator = () => {
    const friends = [
        { name: 'friend #1', Age: ' Age - 33' },
        { name: 'friend #2', Age: ' Age - 40' },
        { name: 'friend #3', Age: ' Age - 22' },
        { name: 'friend #4', Age: ' Age - 16' },
        { name: 'friend #5', Age: ' Age - 18' },
        { name: 'friend #6', Age: ' Age - 19' },
        { name: 'friend #7', Age: ' Age - 20' },
        { name: 'friend #8', Age: ' Age - 25' }

    ]

    return (

        <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={friend => friend.name}
            data={friends}
            renderItem={({ item }) => {
                return (
                    <Text style={styles.textStyle}>{item.name + item.Age}</Text>
                )
            }}
        />
    )
}

const styles = StyleSheet.create(
    {
        textStyle: {
            marginVertical: 50,
        },
    }
)

export default navigator;