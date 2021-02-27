import React from 'react';
import {InputArea, Input} from './styles';
export default ({Icon, onChangeText, placeholder, secureTextEntry, value}) => {
  return (
    <InputArea>
      <Icon width="24" height="24" fill="#268596" />
      <Input
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#268596"
        secureTextEntry={secureTextEntry}
        value={value}
      />
    </InputArea>
  );
};
