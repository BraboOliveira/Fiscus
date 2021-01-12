import styled from 'styled-components/native'
import { FlatList } from 'react-native'

export const Container = styled.View`
  padding-top: 30px;
  display: flex;
  flex: 1;
  background-color: #444a5a;
  justify-content: center;
  align-items: stretch;
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

export const SlideBut = styled.View`
  margin: 5px;
  border-radius: 30px;
`;

export const Input = styled.TextInput`
  background-color: #ffffff;
  border-radius: 3px;
  height: 44px;
  padding: 0px 20px;
  margin-bottom: 10px;
`;

export const Button2 = styled.TouchableOpacity`
  background-color: ${props => (props.selected ? '#666' : '#000')};
  border-radius: 50px;
  height: 40px;
  padding: 0px 10px;
  margin-top: 5px;
  justify-content: center;
  align-items: center;
`;
export const Button = styled.TouchableOpacity`
  background-color: #7a91ca;
  border-radius: 3px;
  height: 44px;
  padding: 0px 20px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
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
  margin-left: 8px;
  font-family: 'RobotoSlab-Medium';
  font-size: 16px;
  color: ${props => (props.selected ? '#9f9ca7' : '#fff')};
  padding: 4px 4px;
  margin: 1px;
`
export const HourText = styled.Text`
  color: ${props => (props.selected ? '#000' : '#fff')};
  font-family: 'RobotoSlab-Regular';
  font-size: 18px;
`