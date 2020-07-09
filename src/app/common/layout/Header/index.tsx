import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Container,
  Text,
  Avatar,
  Date,
} from './styles';

const avatar = {
  src: 'images/avatar.jpeg',
};

const Header: React.FC = () => {
  const history = useHistory();

  function handleClick() {
    history.push('/home');
  }

  return (
    <Container>
      <Date onClick={() => handleClick()}>
        <Text>Tuesday, August 13th</Text>
        <h1>Today</h1>
      </Date>
      <Avatar>
        <img
          src={avatar.src}
          alt=""
        />
      </Avatar>
    </Container>
  );
};

export default Header;
