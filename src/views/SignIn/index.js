import React, {useContext, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import {
  Container,
  InputArea,
  ButtonArea,
  ButtonText,
  MessageButton,
  MessageButtonText,
  MessageButtonTextBold,
} from './styles';
import BarberLogo from '../../assets/barber.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';
import Input from '../../components/input';

import {UserContext} from '../../contexts/UserContext';
import Api from '../../Api';
export default () => {
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const {dispatch: userDispatch} = useContext(UserContext);
  const navigation = useNavigation();

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{name: 'SignUp'}],
    });
  };
  const handleSignClick = async () => {
    if (emailField !== '' && passwordField !== '') {
      let json = await Api.signIn(emailField, passwordField);
      if (json.token) {
        await AsyncStorage.setItem('token', json.token);
        userDispatch({
          type: 'setAvatar',
          payload: {
            avatar: json.data.avatar,
          },
        });
        navigation.reset({
          routes: [{name: 'MainTab'}],
        });
      } else {
        alert('E-mail ou senha incorretos!');
      }
    } else {
      alert('Preencha os campos');
    }
  };

  return (
    <Container>
      <BarberLogo width="100%" height="160" />
      <InputArea>
        <Input
          Icon={EmailIcon}
          placeholder="Digite seu e-mail"
          value={emailField}
          onChangeText={(text) => setEmailField(text)}
        />
        <Input
          Icon={LockIcon}
          placeholder="Digite sua senha"
          value={passwordField}
          onChangeText={(text) => setPasswordField(text)}
          secureTextEntry={true}
        />
        <ButtonArea onPress={handleSignClick}>
          <ButtonText>Login</ButtonText>
        </ButtonArea>
      </InputArea>
      <MessageButton onPress={handleMessageButtonClick}>
        <MessageButtonText>Ainda não possui uma conta?</MessageButtonText>
        <MessageButtonTextBold>Cadastre-se</MessageButtonTextBold>
      </MessageButton>
    </Container>
  );
};
