import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Header from "../../sections/components/header";

const Home = (props) => {
  return (
    <View>
      <Header />
      <TouchableOpacity
          onPress={() => alert("close")}
          style={styles.button}
        >
          <Text>Cerrar</Text>
      </TouchableOpacity>
      <Text>Hola</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#e350a8",
    borderRadius: 5,
  },
});

export default Home;