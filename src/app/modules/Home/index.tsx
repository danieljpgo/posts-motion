import React from 'react';
import { Container, CardList } from './styles';

interface Card{
  id: string;
  category: string;
  title: string;
  pointOfInterest: number;
  backgroundColor: string;
}

const cardData: Card[] = [
  {
    id: 'c',
    category: 'Pizza',
    title: '5 Food Apps Delivering the Best of Your City',
    pointOfInterest: 80,
    backgroundColor: '#814A0E',
  },
  {
    id: 'f',
    category: 'How to',
    title: 'Arrange Your Apple Devices for the Gram',
    pointOfInterest: 120,
    backgroundColor: '#959684',
  },
];

const Home: React.FC = () => (
  <Container>
    <CardList>
      {cardData.map((card: Card) => (
        <div key={card.id}>x</div>
      ))}
    </CardList>
  </Container>
);

export default Home;
