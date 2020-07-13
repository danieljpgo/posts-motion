import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Container, Content } from './styles';

const Navigation: React.FC = (props) => {
  const { children } = props;

  return (
    <Container>
      <Header />
      <Content>
        {children}
      </Content>
      <Footer />
    </Container>
  );
};

export default Navigation;
