import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function calculator() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const navigation = useNavigation();

  const handleOperation = (operation) => {
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);
    let result = 0;

    switch (operation) {
      case 'add':
        result = num1 + num2;
        navigation.navigate('result', { value1: num1, value2: num2, operation: 'ADIÇÃO', formula: `${num1} + ${num2}`, result });
        break;
      case 'subtract':
        result = num1 - num2;
        navigation.navigate('result', { value1: num1, value2: num2, operation: 'SUBTRAÇÃO', formula: `${num1} - ${num2}`, result });
        break;
      case 'multiply':
        result = num1 * num2;
        navigation.navigate('result', { value1: num1, value2: num2, operation: 'MULTIPLICAÇÃO', formula: `${num1} * ${num2}`, result });
        break;
      case 'divide':
        result = num1 / num2;
        navigation.navigate('result', { value1: num1, value2: num2, operation: 'DIVISÃO', formula: `${num1} / ${num2}`, result });
        break;
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Valor 1"
        keyboardType="numeric"
        style={styles.input}
        value={value1}
        onChangeText={setValue1}
      />
      <TextInput
        placeholder="Valor 2"
        keyboardType="numeric"
        style={styles.input}
        value={value2}
        onChangeText={setValue2}
      />
      <TouchableOpacity style={styles.button} onPress={() => handleOperation('add')}>
        <FontAwesome name="plus" size={24} color="white"/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleOperation('subtract')}>
        <FontAwesome name="minus" size={24} color="white"/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleOperation('multiply')}>
        <FontAwesome name="times" size={24} color="white"/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleOperation('divide')}>
        <Text style={styles.text}> % </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    fontSize: 18,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontStyle: 'bold',
  },
});
