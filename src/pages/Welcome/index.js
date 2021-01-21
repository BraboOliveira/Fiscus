import React, { useState, useEffect } from 'react';
import { StackActions, NavigationActions } from 'react-navigation';
import { StatusBar, ActivityIndicator,Dimensions, View, ImageBackground, Text,SafeAreaView } from 'react-native';
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
  Button2,
  Button3,
  ButtonText,
  TextBanner,
  StyledFlatList,
  ProviderName,
  HourText,
  SlideBut,
  PontosSlide,
  ViewSlide,
  Buttons,
  ViewButton2,
} from './styles'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Welcome(props) {
  const [username, setUsername] = useState('USUARIO')
  const [password, setPassword] = useState('SENHA')
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const [ativo, setAtivo] = useState(0);
  const [botao, setBotao] = useState(0);

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
  useEffect(() => {
    if(botao===3){
    console.log("Teste Botões")
    signIn()
    }
  }, [botao]);
  
  const slides = [
    { title: 'Primeiro Banner', value: 0 ,uri: 'https://tropicaldiscovery.com/wp-content/grand-media/image/Atitlan-Menu-Banner-e1501248540966.jpg'},
    { title: 'Segundo Banner', value: 1, uri: 'https://tropicaldiscovery.com/wp-content/grand-media/image/Atitlan-Menu-Banner-e1501248540966.jpg'},
    { title: 'Terceiro Banner', value: 2 , uri: 'https://tropicaldiscovery.com/wp-content/grand-media/image/Atitlan-Menu-Banner-e1501248540966.jpg'},
    { title: 'Quarto Banner', value: 3, uri: 'https://tropicaldiscovery.com/wp-content/grand-media/image/Atitlan-Menu-Banner-e1501248540966.jpg' },
  ];
  const button2 = [
    { title: 'Verificar', value: 0 ,uri: 'https://tropicaldiscovery.com/wp-content/grand-media/image/Atitlan-Menu-Banner-e1501248540966.jpg'},
    { title: 'Segundo Banner', value: 1, uri: 'https://tropicaldiscovery.com/wp-content/grand-media/image/Atitlan-Menu-Banner-e1501248540966.jpg'},
    { title: 'Terceiro Banner', value: 2 , uri: 'https://tropicaldiscovery.com/wp-content/grand-media/image/Atitlan-Menu-Banner-e1501248540966.jpg'},
    { title: 'Consulta Dívida Ativa', value: 3, uri: 'https://tropicaldiscovery.com/wp-content/grand-media/image/Atitlan-Menu-Banner-e1501248540966.jpg' },
  ];
  return (
    <Container>
      <StatusBar barStyle="light-content" />
        <Title>Bem-vindo</Title>
      <TextInformation>
        Logo + Algum texto
      </TextInformation>
        <ViewSlide>
                <Carousel
                  layout={"default"}
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
                              height: 200,
                              padding: 20,
                              marginLeft: 1,
                              marginRight: 1,
                               }}>
                              <TextBanner>{item.title}</TextBanner>
                            {/* <TextBanner>{item.value}</TextBanner> */}
                          </ImageBackground>
                      );
                    }
                  }
                onSnapToItem = { (index) => {setAtivo(index)}} />
            </ViewSlide>

            <PontosSlide>
              <SafeAreaView>
                <StyledFlatList
                  data={slides}
                  keyExtractor={(item,index) => index.toString()}
                  horizontal= {true}
                  renderItem={({item})=>{
                return(   

                <Button2 
                  onPress={() => {}}
                  selected={item.value === ativo}
                >
                  <ProviderName >
                    <HourText  >
                    {item.value + 1}
                    </HourText>
                  </ProviderName>
                </Button2>

                    )
                }}
              />
                </SafeAreaView>
              </PontosSlide>
              
              <SafeAreaView>
              <StyledFlatList
              data={slides}
              keyExtractor={(item,index) => index.toString()}
              horizontal={true}
              renderItem={({item})=>{
            return(   
              <Buttons>
                <Button 
                  onPress={()=>{}}
                >
                <HourText >
                  {item.title}
                </HourText>
                </Button>
                </Buttons> 
                    )
                }}
              />
              </SafeAreaView>

              <ViewButton2>
              <StyledFlatList
              data={button2}
              keyExtractor={(item,index) => index.toString()}
              horizontal={false}
              numColumns={2}
              renderItem={({item})=>{
            return(   
                <Button3 
                  onPress={()=>{setBotao(item.value)}}
                >
                <HourText >
                  {item.title}
                </HourText>
                </Button3>
                    )
                }}
              />
              </ViewButton2>
              
      {!!errorMessage && <Error>{errorMessage}</Error>}
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