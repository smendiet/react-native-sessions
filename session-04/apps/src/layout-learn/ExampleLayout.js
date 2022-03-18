import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

const {height, width} = Dimensions.get("window");

const ExampleLayout = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.square, { backgroundColor: "#cc4bc2"}]} />
      <View style={[styles.square, { backgroundColor: "#dd5e98"}]} />
      <View style={[styles.square, { backgroundColor: "#e16f7c"}]} />
      <View style={[styles.square, { backgroundColor: "#c1ae7c"}]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "200%",
    height: "100%",
    padding: 16,
  },
  square: {
    width: 100,
    height: 100,
    marginBottom: 16,
  }
});

export default ExampleLayout;