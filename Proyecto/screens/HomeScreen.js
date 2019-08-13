import React, { Component } from 'react';
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  
} from 'react-native'
<<<<<<< HEAD

=======
import { Text } from 'react-native-elements';
import { createBottomTabNavigator, createAppContainer, TabNavigator, createStackNavigator } from 'react-navigation';
>>>>>>> 3b7f8d4297a98d439b8949b5a49ff3daba5290a6

export default class SignUp extends React.Component {

  static navigationOptions = {title:'Mis Peliculas'};

  state = {
    email: '', password: ''
  }

  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }

  signUp = async () => {
    const { email, password } = this.state
    try {
      console.log('user successfully signed up!: ', success)
    } catch (err) {
      console.log('error signing up: ', err)
    }
    //ApiController.GuardarSignUp(this.state) //Buscar ApiController
  }

  onPressEnviarDatos() {
     this.signUp()
  }

  render() {
    navigator = this.props.navigator;
    const open = this.state.open;
    return (

        <View style={styles.container2}>
        <TextInput
          style={styles.input}
          placeholder='Correo Electrónico'
          autoCapitalize="none"
          placeholderTextColor='gray'
          onChangeText={val => this.onChangeText('email', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Contraseña'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='gray'
          onChangeText={val => this.onChangeText('password', val)}
        />

        <View style={styles.container3}>
        <Button onPress={() => {
              this.onPressEnviarDatos();
            }}
        color='rgb(0,0,0)'
        style={styles.touchable}
        buttonStyle={styles.boton}
          title='Ingresar'
<<<<<<< HEAD
         
        />

        <View style={styles.container4}>
        <View style={styles.btn2}>
        <Button 
        onPress={() => { navigator.navigate('Registro')}}
        color='rgb(0,0,0)'
          
          title='Registrarse'

        />

      </View>

      </View>
=======
        />

        <View style={styles.container4}>
              <Button 
                title="Registrarse"
                style={styles.touchable}
                buttonStyle={styles.boton}
                onPress={() => { navigator.navigate('Registro')}}
                > </Button>  
>>>>>>> 3b7f8d4297a98d439b8949b5a49ff3daba5290a6
      </View>
      </View>
   
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 45,
    backgroundColor: 'white',
    margin: 10,
    padding: 8,
    color: 'black',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '200',
  },
  image: {
    width: 190,
    height: 200,
    borderRadius: 20
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container2: {
    flex: 1,
    margin: 3,
    alignItems: 'center'
  },
  container3: {
    flex: 1,
    margin: 3,
    alignItems: 'center'
  },
  container4: {
    flex: 1,
    margin: 150,
    alignItems: 'center'
  },
  btn: {
    width: 350,
    height: 45,
    backgroundColor: 'rgb(50,156,129)',
    margin: 10,
    padding: 8,
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '200',
  },
  btn2: {
    width: 350,
    height: 45,
    backgroundColor: '#00e5ff',
    margin: 10,
    padding: 8,
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '200',
<<<<<<< HEAD
<<<<<<< HEAD
  }
})

=======
=======
>>>>>>> 3b7f8d4297a98d439b8949b5a49ff3daba5290a6
  },
  touchable: {
    marginLeft: '10%',
    width: '80%',
},
boton:{
    marginLeft: '20%',
    marginRight: '20%',

}
})
>>>>>>> 3b7f8d4297a98d439b8949b5a49ff3daba5290a6
