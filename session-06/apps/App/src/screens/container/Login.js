import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import { useFormik } from 'formik';

const Login = () => {
  const signInForm = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => login(values.email, values.password),
  });

  const [loading, setLoading] = useState();
  const navigation = useNavigation();

  function login(emailUser, passwordUser) {
    //Login exitoso
    setLoading(false);
    navigation.navigate('TabLayout');
  }

  return (
    <ImageBackground
      source={require('../../../assets/background.png')}
      style={styles.image}>
      <SafeAreaView style={styles.container}>
        <Image
          source={require('../../../assets/bedu.png')}
          style={styles.logo}
        />
        <View>
          <TextInput
            style={styles.input}
            placeholder="Email users"
            placeholderTextColor="white"
            onChangeText={signInForm.handleChange('email')}
            defaultValue={signInForm.values.email}
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor="white"
            secureTextEntry={true}
            onChangeText={signInForm.handleChange('password')}
            defaultValue={signInForm.values.password}
          />
          <TouchableOpacity onPress={signInForm.handleSubmit} style={styles.button}>
            {loading ? (
              <Spinner
                visible={true}
                textContent={'Loading...'}
                textStyle={styles.spinnerTextStyle}
              />
            ) : (
              <Text style={styles.buttonLabel}>Iniciar Sesión</Text>
            )}
          </TouchableOpacity>
        </View>
        <Text style={styles.textByGroupar}>React Native</Text>
      </SafeAreaView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textByGroupar: {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: 50,
    fontSize: 18,
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
  logoliteral: {
    width: 250,
    height: 50,
    marginBottom: 20,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  input: {
    marginBottom: 10,
    marginTop: 5,
    width: 350,
    height: 60,
    paddingHorizontal: 10,
    borderRadius: 5,
    fontSize: 18,
    backgroundColor: '#838383',
    color: 'white',
  },
  button: {
    backgroundColor: '#99c84a',
    borderRadius: 5,
    marginTop: 20,
  },
  buttonLabel: {
    color: 'white',
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const mapStateToProps = state => {
  const {friends} = state;
  return {friends};
};

export default connect(mapStateToProps)(Login);
