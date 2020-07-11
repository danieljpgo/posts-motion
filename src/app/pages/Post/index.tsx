import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import {
  Container,
  Title,
  Img,
  Text,
} from './styles';
import { postData } from '../../common/utils/posts';

const Post: React.FC = () => {
  const match = useRouteMatch();
  const data = postData.find((post) => post.id === (match.params as any)?.id);

  return (
    <Container
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Title>{data?.title}</Title>
      <Img
        alt={data?.title}
        src={data && `../images/${data.src}`}
      />
      <Text>
        {data?.content}
      </Text>
    </Container>
  );
};

export default Post;
