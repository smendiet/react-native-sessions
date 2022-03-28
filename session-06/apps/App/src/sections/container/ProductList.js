import { View, Text, FlatList } from 'react-native'
import Product from '../components/product';
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function ProductList() {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);

  async function loginSucess() {
    const dataUser = await AsyncStorage.getItem('userLogged');
    getProducts(JSON.parse(dataUser).id);
  }

  const getProducts = async id => {
    const response = await fetch();
  }

  useEffect(() => loginSucess(), []);

  viewProduct = item => {
    navigation.navigate('Product', {
      product: item,
    })
  };

  renderItem = ({item}) => {
    return (
      <Product
        name={...item}
        onPress={() => {
          viewProduct(item);
        }}
      ></Product>
    );
  };

  return (
    <View>
      <Text>product_list</Text>
    </View>
  )
}