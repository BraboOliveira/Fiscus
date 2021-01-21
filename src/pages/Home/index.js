import React, { useState, useEffect } from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import PropTypes from 'prop-types'
import api from '../../services/api'
import { deleteUser } from '../../utils'
import ProductItem from '../../components/ProductItem'
import AsyncStorage from '@react-native-community/async-storage';

import { Container, Title, Button, ButtonText, ProductList } from './styles'

export default function Home() {
	const [data, setData] = useState([]);
	const [refreshing, setRefreshing] = useState(false);
	const [cnpj,setCnpj] = useState('02230061000170');
	const [token,setToken] = useState('');

	useEffect(() => {
		async function loadProducts() {
			const userToken = await AsyncStorage.getItem('@ListApp:access_token')
			setToken(userToken);
			// const response = await api.get(`consulta-cnpj-df-trial/v1/cnpj/34238864000168`,null, {
			// 'Accept': 'application/json',
			// 'Authorization': `Bearer ${userToken}`,
			// })
			// //console.log(response)


			// setData(response.data);
		}

		loadProducts();
	}, []);

	async function buscaDados() {
		//const userToken = await AsyncStorage.getItem('@ListApp:access_token');
			console.log(token);
		const response = await api.get(`/consulta-divida-ativa-df/api/v1/devedor/${cnpj}`, {
		headers: {
			"Accept": "application/json",
			"Authorization": `Bearer ${token}`,
		}})
		// .then((res)=>res.json())
		// .then((json)=>{console.log(json)})
		// .catch((err)=>{console.log(err)})
			console.log(response.data);
		setData(response.data);

	}

	renderListItem = ({ item }) => <ProductItem product={item} />

	return (
	<Container>
		<View>
			<Text>
				Clique abaixo para consultar
			</Text>
			<Button
				onPress={buscaDados}
				title="busca"
				color="#000">
			<ButtonText>
				Buscar
			</ButtonText>
			</Button>
		</View>

			<ProductList
				data={data}
				keyExtractor={item => String(item.id)}
				renderItem={renderListItem}
			/>
	</Container>
	);
}

Home.navigationOptions = ({ navigation }) => {

	return {
		title: 'Home',
		headerBackTitleVisible: true,
		headerRight: () => (
			<TouchableOpacity
				onPress={() => (
					deleteUser().then(() => {
						navigation.navigate('AuthLoading')
					})
				)}
				style={{ marginRight: 10 }}
			>
				<Text>Sair</Text>
			</TouchableOpacity>
		),
	};

};

Home.propTypes = {
	navigation: PropTypes.shape({
		dispatch: PropTypes.func,
	}).isRequired,
};
