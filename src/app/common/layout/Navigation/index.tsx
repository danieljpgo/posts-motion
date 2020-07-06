import React from 'react';
import Header from '../Header';
import { Container, Content } from './styles';

const Navigation: React.FC = (props) => {
  const { children } = props;

  return (
    <Container>
      <Header />
      <Content>
        {children}
      </Content>
    </Container>
  );
};

export default Navigation;
