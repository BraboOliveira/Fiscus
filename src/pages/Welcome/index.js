import React, { useState } from 'react';
import { StackActions, NavigationActions } from 'react-navigation';
import { StatusBar, ActivityIndicator,Dimensions, View, ImageBackground, Text } from 'react-native';
import PropTypes from 'prop-types';
import base64 from 'react-native-base64';
import api from '../../services/api';
import QueryString from 'query-string';
import AsyncStorage from '@react-native-community/async-storage';
import Carousel from 'react-native-snap-carousel';

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
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Welcome(props) {
  const [username, setUsername] = useState('USUARIO')
  const [password, setPassword] = useState('SENHA')
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const [ativo, setAtivo] = useState(0);

  async function saveUser(user) {
    await AsyncStorage.setItem('@ListApp:access_token', JSON.stringify(user))
  }

  async function signIn() {
    if (username.length === 0) return
    setLoading(true)
    console.log("teste");
    let formData = new FormData();
    let as = formData.append('grant_type', 'client_credentials');
    try {
      const consumerKey ='r2WXD2iTHNCA2IUw0x0wfEeDIcwa';
      const consumerSecret = '4gW9WUdwWkrmGc4E1XNAuMqGPp4a'
      const encodedCredentials = base64.encode(consumerKey + ':' + consumerSecret);
       //const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
      //console.log(token);
      const data= QueryString.stringify({
        'grant_type': 'client_credentials'
      });
      const response = await api.post('/token',data,{      
        headers: {
          // 'Content-type': 'application/x-www-form-urlencoded',
          // 'Accept': 'application/json',
          "Authorization":  `basic ${encodedCredentials}`,
      }
    })
      console.log(response);
      const user = response.data['access_token'];
      console.log(user);
         await saveUser(user)
       const resetAction = StackActions.reset({
         index: 0,
         actions: [NavigationActions.navigate({ routeName: 'App' })],
       })
      setLoading(false)
      props.navigation.dispatch(resetAction)
    } catch (err) {
      console.log("Não foi")
      setLoading(false)
      setErrorMessage('Usuário não existe')
    }
  }
  const slides = [
    { title: 'Teste Banner', value: 'Dashboard' ,uri: 'https://tropicaldiscovery.com/wp-content/grand-media/image/Atitlan-Menu-Banner-e1501248540966.jpg'},
    { title: 'Alterar Senha', value: '2', uri: 'https://tropicaldiscovery.com/wp-content/grand-media/image/Atitlan-Menu-Banner-e1501248540966.jpg'},
    { title: 'Falar com o Suporte', value: '3' , uri: 'https://tropicaldiscovery.com/wp-content/grand-media/image/Atitlan-Menu-Banner-e1501248540966.jpg'},
    { title: 'Falar com o Suporte', value: '3', uri: 'https://tropicaldiscovery.com/wp-content/grand-media/image/Atitlan-Menu-Banner-e1501248540966.jpg' },
    // { title: 'Aulas Agendadas', value: 'Agendadas' , uri: 'https://www.autoescolaonline.net/wp-content/uploads/2019/08/post-autoescola-post.jpg'},
    // { title: 'Alterar Senha', value: '2' , uri: 'https://www.autoescolaonline.net/wp-content/uploads/2019/08/post-autoescola-post.jpg'},
    // { title: 'Falar com o Suporte', value: '3' , uri: 'https://www.autoescolaonline.net/wp-content/uploads/2019/08/post-autoescola-post.jpg'},
    // { title: 'Falar com o Suporte', value: '3' , uri: 'https://www.autoescolaonline.net/wp-content/uploads/2019/08/post-autoescola-post.jpg'},
  ];
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Title>Bem-vindo</Title>
      <TextInformation>
        Para continuar, precisamos que você informe seu usuário
      </TextInformation>
      <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center' }} >
                <Carousel
                  layout={"default"}
                  //ref={ref => carousel = ref}
                  data={slides}
                  sliderWidth={windowWidth}
                  itemWidth={windowWidth-70}
                  renderItem={({item})=>{
                    return (
                          <ImageBackground
                            source={item}
                            imageStyle={{ borderRadius: 6}}
                            style={{
                              opacity:  0.8,
                              backgroundColor:'#000',
                              borderRadius: 6,
                              height: 180,
                              padding: 20,
                              marginLeft: 1,
                              marginRight: 1,
                               }}>
                            <Text>{item.title}</Text>
                            {/* <TextBanner>{item.value}</TextBanner> */}
                        </ImageBackground>

                      
                
                    );
                }
                }
                onSnapToItem = { (index) => {setAtivo(index)}} />
            </View>
            <Text>{ativo}</Text>
      {!!errorMessage && <Error>{errorMessage}</Error>}
      <Form>


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