import { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import {
  PriceTextCoin,
  PriceTextNumbers,
  ProductBasicInfosContainer,
  ProductTextStyle,
  RefTextStyle,
  RefTextStyleNumbers,
  TextStyle,
} from './style';

export default function ProductBasicInfos() {
  const { currentProduct } = useContext(ProductContext);

  const { name, reference, price } = currentProduct || {};

  return (
    <ProductBasicInfosContainer>
      <TextStyle>
        <ProductTextStyle>{name?.split(' ')[0]}</ProductTextStyle>
        <RefTextStyle>
          REF:
          {' '}
          <RefTextStyleNumbers>{reference}</RefTextStyleNumbers>
        </RefTextStyle>
        <PriceTextCoin>
          R$
          {' '}
          <PriceTextNumbers>{price?.toFixed(2)}</PriceTextNumbers>
        </PriceTextCoin>
      </TextStyle>

    </ProductBasicInfosContainer>
  );
}
