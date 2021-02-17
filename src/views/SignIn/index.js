import React from 'react';

import {
  Container,
  InputArea,
  ButtonArea,
  ButtonText,
  MessageButton,
  MessageButtonText,
  MessageButtonTextBold,
} from './styles';
import Input from '../../components/input';
import BarberLogo from '../../assets/barber.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';
export default () => {
  return (
    <Container>
      <BarberLogo width="100%" height="160" />
      <InputArea>
        <Input Icon={EmailIcon} placeholder="Digite seu e-mail" />
        <Input Icon={LockIcon} placeholder="Digite sua senha" />
        <ButtonArea>
          <ButtonText>Login</ButtonText>
        </ButtonArea>
      </InputArea>
      <MessageButton>
        <MessageButtonText>Ainda não possui uma conta?</MessageButtonText>
        <MessageButtonTextBold>Cadastre-se</MessageButtonTextBold>
      </MessageButton>
    </Container>
  );
};
