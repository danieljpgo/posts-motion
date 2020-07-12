import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { postData } from '../../common/utils/posts';
import {
  Container,
  Title,
  ImageContainer,
  Content,
} from './styles';

const title = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const titleLetter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: {
      duration: 1,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

const Post: React.FC = () => {
  const match = useRouteMatch();
  const data = postData.find((post) => post.id === (match.params as any)?.id);

  const { scrollYProgress } = useViewportScroll();
  const scaleScroll = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <Container
      initial="initial"
      animate="animate"
      exit="exit"
    >

      <Title variants={title}>
        {data && data.title.split('').map((letter, index) => (
          <motion.h1 key={(letter + index.toString())} variants={titleLetter}>{letter}</motion.h1>
        ))}
      </Title>
      <ImageContainer>
        <motion.img
          style={{ scale: scaleScroll }}
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
