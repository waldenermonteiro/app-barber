import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #63c2d1;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const InputArea = styled.View`
  width: 100%;
  padding: 40px;
`;

export const ButtonArea = styled.TouchableOpacity`
  height: 60px;
  background-color: #268596;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;
export const ButtonText = styled.Text`
  font-size: 18px;
  color: #fff;
`;

export const MessageButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 20px;
`;
export const MessageButtonText = styled.Text`
  font-size: 16px;
  color: #268596;
`;
export const MessageButtonTextBold = styled.Text`
  font-size: 16px;
  color: #268596;
  font-weight: bold;
  margin-left: 5px;
`;
