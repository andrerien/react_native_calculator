import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Result({ route }) {
  const { value1, value2, operation, formula, result } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Valor 1: {value1}</Text>
      <Text style={styles.text}>Valor 2: {value2}</Text>
      <Text style={styles.text}>Operação: {operation}</Text>
      <Text style={styles.text}>Fórmula: {formula}</Text>
      <Text style={styles.text}>Resultado: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});
