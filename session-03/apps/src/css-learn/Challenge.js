import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Challenge() {
  return (
    <View style={styles.container}>
      <Text>Alpha</Text>
      <Text>Bravo</Text>
      <Text>Charlie</Text>
      <Text>Delta</Text>
      <Text>Echo</Text>
      <Text>Foxtrot</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#6804CD",
    width: "100%",
    height: 30,
  },
});
