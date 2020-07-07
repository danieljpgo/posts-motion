import React from 'react';
import { Container, Text, Avatar } from './styles';

const avatar = {
  src: 'images/avatar.jpeg',
};

const Header: React.FC = () => (
  <Container>
    <div>
      <Text>Tuesday, August 13th</Text>
      <h1>Today</h1>
    </div>
    <Avatar>
      <img
        src={avatar.src}
        alt=""
      />
    </Avatar>
  </Container>
);

export default Header;
