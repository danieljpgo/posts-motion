import React from 'react';
import { Container, CardListMotion } from './styles';
import Card from '../../common/components/Card';
import { stagger } from './animations';

interface Card{
  id: string,
  src: string,
}

const cardData: Card[] = [
  {
    id: '1',
    src: '1.jpg',
  },
  {
    id: '2',
    src: '2.jpg',
  },
  {
    id: '3',
    src: '3.jpg',
  },
  {
    id: '4',
    src: '4.jpg',
  },
  {
    id: '5',
    src: '5.jpg',
  },
  {
    id: '6',
    src: '6.jpg',
  },
];

const Home: React.FC = () => (
  <Container>
    <CardListMotion
      variants={stagger}
      initial="inital"
      animate="animate"
    >
      {cardData.map((card: Card) => (
        <Card
          key={card.id}
          src={card.src}
        />
      ))}
    </CardListMotion>
  </Container>
);

export default Home;
