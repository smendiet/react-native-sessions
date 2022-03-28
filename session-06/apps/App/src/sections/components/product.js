import { View, Text, StyleSheet, Touchable } from 'react-native'
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function product() {
  return (
    <View style={styles.cardProduct}>
      <TouchableOpacity onPress={props.onPress}>
        <View style={styles.product}>
          <Text style={styles.productName}>{props.name}</Text>
        </View>
      </TouchableOpacity>
      <Text>product</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  cardProduct: {
    paddingBottom: 10,
  },
  productName: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 0,
  },
  product: {
    backgroundColor: tempColor[Math.floor(Math.random() * tempColor.lenght)]
  }
});