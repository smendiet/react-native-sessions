import {SafeAreaView, Text} from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// const getData = async () => {
//   try {
//     const jsonValue = await AsyncStorage.getItem('@storage_Key');
//     return jsonValue != null ? JSON.parse(jsonValue) : null;
//   } catch (e) {
//     // error reading value
//   }
// };



export default function Strains() {
  const [data, setData] = useState();

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key');
      if (value !== null) {
        // value previously stored
        setData(value);
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => getData() , []);

  return (
    <SafeAreaView>
      <Text>{data}</Text>
    </SafeAreaView>
  );
}
