import React from 'react';
import { Container, CardList } from './styles';
import Card from '../../common/components/Card';

interface Card{
  id: string;
}

const cardData: Card[] = [
  {
    id: 'c',
  },
  {
    id: 'f',
  },
  {
    id: 'd',
  },
  {
    id: 'e',
  },

];

const Home: React.FC = () => (
  <Container>
    <CardList>
      {cardData.map((card: Card) => (
        <Card key={card.id}>x</Card>
      ))}
    </CardList>
  </Container>
);

export default Home;
