/* eslint-disable camelcase */
import {
  CardContainer,
  CardImage,
  CardImageWithInfosContainer,
  CardInfosContainer,
  ColorContainer,
  ColorText,
  ContainerImage,
  KeyValueContainer,
  PricesWithSizesContainer,
  PrimaryText,
  SecondaryText,
  SizeContent,
  SizesContainer,
  TotalQuantitySize,
  TotalSizeTag,
} from './styles';

export default function ProductCartCard({
  imageSrc, reference, name, colors, sizes, totalPrice,
  quantity, discount,
}) {
  const BRL = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

  const totalQuantity = sizes.reduce((acc, cur) => acc + cur[1] * quantity, 0);

  return (
    <CardContainer>
      <CardImageWithInfosContainer>
        <ContainerImage>
          <CardImage src={ imageSrc[0].image } />
        </ContainerImage>
        <CardInfosContainer>
          <PrimaryText>
            {reference}
          </PrimaryText>
          <PrimaryText>
            {name}
          </PrimaryText>
          <SecondaryText>
            UNIT.
            {' '}
            <span
              style={ {
                fontSize: '14px',
                fontWeight: 'bold',
                color: '#000',
              } }
            >
              {BRL.format(totalPrice / quantity)}
            </span>
          </SecondaryText>
          {colors.map(({ cod_hex, color_name }) => (
            <ColorContainer
              key={ cod_hex }
              color={ `#${cod_hex}` }
            >
              <ColorText>{color_name}</ColorText>
            </ColorContainer>
          ))}
        </CardInfosContainer>
      </CardImageWithInfosContainer>
      <PricesWithSizesContainer>
        <SizesContainer>
          {sizes.map((size) => (
            <KeyValueContainer key={ size }>
              <SizeContent>
                {size[0]}
              </SizeContent>
              <SizeContent>
                {size[1] * quantity}
              </SizeContent>
            </KeyValueContainer>
          ))}

          <KeyValueContainer>
            <TotalSizeTag>TOTAL</TotalSizeTag>
            <TotalQuantitySize>{totalQuantity}</TotalQuantitySize>
          </KeyValueContainer>
        </SizesContainer>
        <PrimaryText>
          Desc:
          {' '}
          {BRL.format(discount)}
        </PrimaryText>
        <PrimaryText>
          Total:
          {' '}
          {BRL.format(totalPrice)}
        </PrimaryText>
      </PricesWithSizesContainer>
    </CardContainer>
  );
}
