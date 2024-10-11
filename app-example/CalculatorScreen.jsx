import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Calculator({ navigation }) {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');

  const handleOperation = (operation) => {
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);
    let result = 0;
    let formula = '';

    switch (operation) {
      case 'add':
        result = num1 + num2;
        formula = `${num1} + ${num2}`;
        break;
      case 'subtract':
        result = num1 - num2;
        formula = `${num1} - ${num2}`;
        break;
      case 'multiply':
        result = num1 * num2;
        formula = `${num1} * ${num2}`;
        break;
      case 'divide':
        result = num1 / num2;
        formula = `${num1} / ${num2}`;
        break;
    }

    navigation.navigate('Result', {
      value1: num1,
      value2: num2,
      operation,
      formula,
      result,
    });
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

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={() => handleOperation('add')}>
          <FontAwesome name="plus" size={30} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton} onPress={() => handleOperation('subtract')}>
          <FontAwesome name="minus" size={30} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton} onPress={() => handleOperation('multiply')}>
          <FontAwesome name="times" size={30} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton} onPress={() => handleOperation('divide')}>
          <FontAwesome name="slash" size={30} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  iconButton: {
    backgroundColor: '#ddd',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
  },
});
