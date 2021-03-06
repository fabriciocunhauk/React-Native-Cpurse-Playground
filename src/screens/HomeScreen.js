import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.textStyle}>Hello world!</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title=" GO TO COMPONENTS DEMO"
      />

      <Button onPress={() => navigation.navigate('List')}
        title="GO TO LIST DEMO"
      />

      <Button
        onPress={() => navigation.navigate('Image')}
        title="GO TO IMAGE SCREEN DEMO"
      />

      <Button
        onPress={() => navigation.navigate('Counter')}
        title="GO TO COUNTER DEMO"
      />

      <Button
        onPress={() => navigation.navigate('Color')}
        title="GO TO COLOR DEMO"
      />

      <Button
        onPress={() => navigation.navigate('Square')}
        title="GO TO SQUARE DEMO"
      />

      <Button
        onPress={() => navigation.navigate('Text')}
        title="TEXT DEMO"
      />

      <Button
        onPress={() => navigation.navigate('Box')}
        title="BOX SCREEN DEMO"
      />
    </View>

  )
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
});

export default HomeScreen;
