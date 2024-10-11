import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function result() {
  const route = useRoute();
  const navigation = useNavigation();
  const { value1, value2, operation, formula, result } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Valor 1: {value1}</Text>
      <Text style={styles.text}>Valor 2: {value2}</Text>
      <Text style={styles.text}>Operação: {operation}</Text>
      <Text style={styles.text}>Fórmula: {formula}</Text>
      <Text style={styles.text}>Resultado: {result}</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    marginVertical: 5,
    fontStyle: 'bold',
  },
});
