import styled from 'styled-components/native'
import { FlatList } from 'react-native'

export const Container = styled.View`
  padding-top: 30px;
  flex: 1;
  background-color: #DED5FD;
  align-items: center;
`;

export const Title = styled.Text`
  text-align: center;
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
`;
//Texto embaixo da logo
export const TextInformation = styled.Text`
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
  color: #dddddd;
  line-height: 21px;
  background-color: #000;
`;


//Area debaixo do slide
export const Area2 = styled.View`

height: 100%;
`;

// Janela do Side
export const ViewSlide = styled.View`
  margin-top: 20px;
  flex-direction: row;
  height: 30%;
  
`;

export const SlideBut = styled.View`
  margin: 5px;
  
`;
//Area de cada botão
export const Buttons = styled.View`
  margin: 4px;
  height: 80px;
  
`;
//Area ponto do slide
export const PontosSlide = styled.View`
  align-items: center;
  margin: 5px;
  height: 30px;
  justify-content: center;
  
`;

//pontos do slide
export const Button2 = styled.TouchableOpacity`
  background-color: ${props => (props.selected ? '#D2691E' : '#000')};
  border-radius: 50px;
  margin: 3px;
  height: 10px;
  width: 10px;
  justify-content: center;
  align-items: center;
`;
//botão redondo
export const Button = styled.TouchableOpacity`
  background-color: #fff;
  border-radius: 50px;
  height: 70px;
  width: 70px;
  padding: 10px 20px;
  margin: 10px;
  justify-content: center;
  align-items: center;
  
`;

//Botões debaixo
export const Button3 = styled.TouchableOpacity`
  background-color: #fff;
  border-radius: 10px;
  margin: 10px;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  
`;

export const ListApp = styled.FlatList`
 
`;
//Texto do Banner
export const TextBanner = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 24px;
  color: #ffeb3b;
  text-shadow: 0px 0px 15px #000;
  
`
//Flatlist Botoes quadrados
export const StyledFlatList = styled(FlatList)`

`
//Flatlist botões redondos
export const StyledFlatList2 = styled(FlatList)`

`

export const ProviderName = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: ${props => (props.selected ? '#9f9ca7' : '#000')};
  margin: 10px;

`
//Texto dos botões
export const HourText = styled.Text`
  color: ${props => (props.selected ? '#000' : '#000')};
  font-family: 'RobotoSlab-Regular';
  font-size: 10px;
`
//Area dos Botões debaixo
export const ViewButton2 = styled.View`
  font-family: 'RobotoSlab-Regular';
  font-size: 10px;
  height: 100%;
  justify-content: center;
  align-items: center;
  
`
// Area dos botoes redondos
export const ViewBody= styled.SafeAreaView`
  font-family: 'RobotoSlab-Regular';
  font-size: 10px;
  justify-content: center;
  align-items: center;
`
export const ViewBody2= styled.SafeAreaView`
  font-family: 'RobotoSlab-Regular';
  font-size: 10px;
  height: 13%;
  justify-content: center;
  align-items: center;
  
`
