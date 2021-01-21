import styled from 'styled-components/native'
import { FlatList } from 'react-native'

export const Container = styled.View`
  padding-top: 30px;
  flex: 1;
  background-color: #444a5a;
`;

export const Title = styled.Text`
  text-align: center;
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
`;

export const TextInformation = styled.Text`
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
  color: #dddddd;
  line-height: 21px;
`;

export const Error = styled.Text`
  color: #e37a7a;
  text-align: center;
  margin-top: 10px;
`;

export const Form = styled.View`
  margin-top: 20px;
`;
export const ViewSlide = styled.View`
  margin-top: 20px;
  flex-direction: row;
  height: 200px;
`;


export const SlideBut = styled.View`
  margin: 5px;
`;
export const Buttons = styled.View`
  margin: 10px;
  height: 50px;
`;
export const PontosSlide = styled.View`
  align-items: center;
  margin: 5px;
  height: 30px;
  justify-content: center;
`;

export const Input = styled.TextInput`
  background-color: #ffffff;
  border-radius: 3px;
  height: 44px;
  padding: 0px 20px;
  margin-bottom: 10px;
`;

export const Button2 = styled.TouchableOpacity`
  background-color: ${props => (props.selected ? '#D2691E' : '#000')};
  border-radius: 50px;
  margin: 3px;
  justify-content: center;
  align-items: center;
`;
export const Button = styled.TouchableOpacity`
  background-color: #7a91ca;
  border-radius: 30px;
  height: 44px;
  padding: 10px 20px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  
`;
export const Button3 = styled.TouchableOpacity`
  background-color: #7a91ca;
  border-radius: 3px;
  height: 100px;
  width: 110px;
  padding: 0px 20px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  margin: 5px;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-weight: bold;
  font-size: 14px;
`;

export const ListApp = styled.FlatList`
 
`;

export const TextBanner = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 24px;
  color: #ffeb3b;
  text-shadow: 0px 0px 15px #000;
`
export const StyledFlatList = styled(FlatList)`

`
export const ProviderName = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: ${props => (props.selected ? '#9f9ca7' : '#fff')};
  margin: 10px;
`
export const HourText = styled.Text`
  color: ${props => (props.selected ? '#000' : '#fff')};
  font-family: 'RobotoSlab-Regular';
  font-size: 10px;
`
export const ViewButton2 = styled.SafeAreaView`
  font-family: 'RobotoSlab-Regular';
  font-size: 10px;
  height: 250px;
  justify-content: center;
  align-items: center;
`