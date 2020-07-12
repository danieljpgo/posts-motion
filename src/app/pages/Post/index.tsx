import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import {
  Container,
  Title,
  ImageContainer,
  Image,
  Content,
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

      <Title>
        <h1>{data?.title}</h1>
      </Title>
      <ImageContainer>
        <Image
          // initial={{ scale: 1.05 }}
          alt={data?.title}
          src={data && `../images/${data.src}`}
        />
      </ImageContainer>
      <Content>
        {data?.content}
      </Content>
    </Container>
  );
};

export default Post;
