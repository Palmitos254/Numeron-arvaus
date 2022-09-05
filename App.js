import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

export default function App() {

  const [text, setText] = useState();
  const [text2, setText2] = useState("Guess a number between 1-100");
  const [num, setNum] = useState(Math.floor(Math.random() * 100) + 1);
  const [kerrat, setKerrat] = useState(1);

  const buttonPressed = () => {
    setKerrat(kerrat + 1)
    if (num == text) {
      Alert.alert('You guessed the number in ' + kerrat + " guesses");
      setKerrat(1)
      setNum(Math.floor(Math.random() * 100) + 1)
      setText2("Guess a number between 1-100")
    } else if (num < text) {
      setText2("Your guess " + text + " is too high")
    } else {
      setText2("Your guess " + text + " is too low")
    }
  }

  return (
    <View style={styles.container}>
      <Text>{text2}</Text>
      <Text></Text>
      <TextInput
        style={{width:200, borderColor: 'gray', borderWidth: 1}}
        onChangeText={text => setText(text)}  
        value={text}
      />
      <Text></Text>
      <Button onPress={buttonPressed} title="Make a Guess" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
