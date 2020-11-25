import React, { useState } from 'react';
import { StackActions, NavigationActions } from 'react-navigation';
import { StatusBar, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import base64 from 'react-native-base64';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';

import {
  Container,
  Title,
  TextInformation,
  Error,
  Form,
  Input,
  Button,
  ButtonText,
} from './styles'

export default function Welcome(props) {
  const [username, setUsername] = useState('0')
  const [password, setPassword] = useState('0')
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  async function saveUser(user) {
    await AsyncStorage.setItem('@ListApp:userToken', JSON.stringify(user))
  }

  async function signIn() {
    if (username.length === 0) return
    setLoading(true)
    console.log("teste");
    let formData = new FormData();
    formData.append('grant_type', 'client_credentials');
    try {

      const username ='r2WXD2iTHNCA2IUw0x0wfEeDIcwa';
      const password = '4gW9WUdwWkrmGc4E1XNAuMqGPp4a'
       const token = base64.encode('r2WXD2iTHNCA2IUw0x0wfEeDIcwa'+':'+'4gW9WUdwWkrmGc4E1XNAuMqGPp4a');
       //const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
      console.log(token);
      const response = await api.post('/token?grant_type=client_credentials',{
        headers: {
          'Content-Type': 'application/json',
          'Authorization':  `Basic cjJXWEQyaVRITkNBMklVdzB4MHdmRWVESWN3YTo0Z1c5V1Vkd1drcm1HYzRFMVhOQXVNcUdQcDRh`
      },
       body: JSON.stringify(formData) ,
      }
    )
      .then((response) => {
        Alert.alert('OK', 'Login is a success');
       })      
    //  .catch(  (error) => {
    //    const response1 = error.response1
    //    console.log(response)
    //  })

     const user = response.data
        console.log(response.data);
 
       await saveUser(user)
 
       const resetAction = StackActions.reset({
         index: 0,
         actions: [NavigationActions.navigate({ routeName: 'App' })],
       })

      setLoading(false)

      props.navigation.dispatch(resetAction)
    } catch (err) {
      console.log(err)

      setLoading(false)
      setErrorMessage('Usuário não existe')
    }
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" />

      <Title>Bem-vindo</Title>
      <TextInformation>
        Para continuar, precisamos que você informe seu usuário
      </TextInformation>

      {!!errorMessage && <Error>{errorMessage}</Error>}

      <Form>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Digite seu usuário"
          underlineColorAndroid="rgba(0, 0, 0, 0)"
          value={username}
          // onChangeText={username => setUsername(username)}
        />

        <Input
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Digite sua senha"
          underlineColorAndroid="rgba(0, 0, 0, 0)"
          secureTextEntry={true}
          value={password}
          // onChangeText={password => setPassword(password)}
        />

        <Button onPress={signIn}>
          {loading ? (
            <ActivityIndicator size="small" color="#FFF" />
          ) : (
            <ButtonText>Prosseguir</ButtonText>
          )}
        </Button>
      </Form>
    </Container>
  )
}

Welcome.navigationOptions = () => {
  return {
    header: null,
  }
}

Welcome.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
  }).isRequired,
}

//key r2WXD2iTHNCA2IUw0x0wfEeDIcwa
//secret 4gW9WUdwWkrmGc4E1XNAuMqGPp4a