import React from 'react'
import { Text } from 'react-native'

import { Container, ProductImage, InfoContainer, ProductName } from './styles'

export default function ProductItem({ product }) {
  return (
    <Container>
      <ProductImage
        source={{ uri: product.url }}
      />
      <InfoContainer>
        <ProductName>{product.cpfCnpj}</ProductName>
        <Text>N {product.numeroProcesso}</Text>
        <Text>Nome {product.nomeDevedor}</Text>
        <Text>Valor {product.valorTotalConsolidadoMoeda}</Text>
      </InfoContainer> 
    </Container>
  );
}
