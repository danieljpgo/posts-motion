import React from 'react';
import { Container, CardListMotion } from './styles';
import Card from '../../common/components/Card';

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
      variants={{
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delay: 0.0,
            when: 'beforeChildren',
            staggerChildren: 0.1,
          },
        },
      }}
      initial="hidden"
      animate="visible"
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
