import React from 'react';
import { Container, CardListMotion } from './styles';
import { stagger } from './animations';
import { postData } from '../../common/utils/posts';
import Card from './Card';

const Home: React.FC = () => {
  const data = postData;

  return (
    <Container>
      <CardListMotion
        variants={stagger}
        initial="inital"
        animate="animate"
      >
        {data.map((post) => (
          <Card
            key={post.id}
            id={post.id}
            src={post.src}
          />
        ))}
      </CardListMotion>
    </Container>
  );
};

export default Home;
