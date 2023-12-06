import styled from 'styled-components';

export const FieldLabel = styled.label`
  color: #3C3C3C;
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  padding-bottom: 4px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
  align-items: center;
`;

export const Field = styled.div`
  padding: 6px;
  border-radius: 3px;
  border-bottom: 1.5px solid #000;
  background: #F2F2F2;
  width: 80%;
  margin: 0 auto;
  text-align: center;
`;

export const TextField = styled.p`
  color: #000;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
`;
