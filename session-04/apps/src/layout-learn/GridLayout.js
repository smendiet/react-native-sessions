import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class GridLayout extends Component {
  render() {
  	return (
      <View style={styles.container}>
          <View style={styles.row}>
            <View style={[styles.box, styles.box2]}>
              <Text style={styles.text}>1</Text>
            </View>
            <View style={[styles.box, styles.box3]}>
              <Text style={styles.text}>2</Text>
            </View>
            <View style={[styles.box, styles.two]}>
              <Text style={styles.text}>3</Text>
            </View>
          </View>
          
          <View style={styles.row}>
            <View style={[styles.box, styles.two]}>
              <Text style={styles.text}>4</Text>
            </View>
            <View style={[styles.box, styles.box2]}>
              <Text style={styles.text}>5</Text>
            </View>
            <View style={[styles.box, styles.box3]}>
              <Text style={styles.text}>6</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={[styles.box, styles.box2]}>
              <Text style={styles.text}>7</Text>
            </View>
            <View style={[styles.box, styles.two]}>
              <Text style={styles.text}>8</Text>
            </View>
            <View style={[styles.box, styles.box3]}>
              <Text style={styles.text}>9</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={[styles.box, styles.box2]}>
              <Text style={styles.text}>10</Text>
            </View>
            <View style={[styles.box]}>
              <Text style={styles.text}>11</Text>
            </View>
            <View style={[styles.box, styles.box3]}>
              <Text style={styles.text}>12</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={[styles.box, styles.box2]}>
              <Text style={styles.text}>13</Text>

            </View>
            <View style={[styles.box]}>
              <Text style={styles.text}>14</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={[styles.box]}>
              <Text style={styles.text}>15</Text>
            </View>
          </View>
      </View>
  	);
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10
  },
  box: {
    flex: 1,
    height: 100,
    backgroundColor: 'gray'
  },
  box2: {
    backgroundColor: 'green'
  },
  box3: {
    backgroundColor: 'orange'
  },
  two: {
    flex: 2
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  }
}); 