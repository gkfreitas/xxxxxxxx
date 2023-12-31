import styled from 'styled-components';

export const ContentModal = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  min-height: 70svh;
  height: 70svh;
  position: relative;
  background-color: #fff;
`;

export const ContainerSearchOrAdd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 14px;
  position: relative;
  padding-top: 12px;
`;

export const ContainerInputsCheckbox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 12px auto;
  overflow: auto;
  width: 70%;
`;

export const SendButton = styled.button`
  cursor: pointer;
  margin: 20px auto;
  display: flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: #809CAA;
`;

export const SendButtonText = styled.p`
  color: #FFF;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
`;

export const PlusIconContainer = styled.div`
  position: absolute;
  right: 8%;
`;

export const EmailTextLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
