import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const RefactorHtml = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estilos de CSS</Text>
      <Text style={styles.regularText}>¡Transformemos este código web a React Native!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
    padding: 8,
  },
  title: {
    color: "red",
    fontFamily: "Times New Roman",
    fontWeight: "bold",
    fontSize: 32
  },
  regularText: {
    fontSize: 43,
    color: "blue",
    fontFamily: "Times New Roman"
  }
});

export default RefactorHtml;