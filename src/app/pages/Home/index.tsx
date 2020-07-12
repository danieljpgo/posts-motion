import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, CardListMotion } from './styles';
import { stagger } from './animations';
import { postData } from '../../common/utils/posts';
import Card from './Card';

const Home: React.FC = () => {
  const data = postData;
  const history = useHistory();

  const id = history.location.pathname.split('/')[2];

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
            type={post.type}
            title={post.title}
            selected={post.id === id}
          />
        ))}
      </CardListMotion>
    </Container>
  );
};

export default Home;
