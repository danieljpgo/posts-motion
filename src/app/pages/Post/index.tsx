import React, { useEffect, useState } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { postData } from '../../common/utils/posts';
import { titleStagger, titleLetter } from './animations';
import { transitionWithDelay } from '../../common/utils/animations';
import {
  Container,
  Title,
  ImageContainer,
  Img,
  Content,
  Text,
  SubHeader,
  Back,
  Info,
} from './styles';

const Post: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);

  const history = useHistory();
  const match = useRouteMatch();
  const { scrollYProgress } = useViewportScroll();
  const scaleScroll = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const data = postData.find((post) => post.id === (match.params as any)?.id);
  const title = data ? data.title.split('') : [];

  useEffect(() => {
    window.scrollTo(0, 0);
    const image = new Image();
    image.src = data ? `../images/${data.src}` : '';
    image.onload = () => setShow(true);
  }, [data]);

  function handleBack() {
    history.push('/home');
  }

  return (
    <Container
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <SubHeader
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ...transitionWithDelay, delay: 1.4 }}
      >
        <Back
          whileHover={{ x: 20 }}
          whileTap={{ x: 0 }}
          onClick={() => handleBack()}
        >
          Back to home
        </Back>
        <Info>
          <span>{`${data?.info.date} - ${data?.info.time}`}</span>
        </Info>
      </SubHeader>
      <Content>
        <ImageContainer>
          {show && (
          <Img
            style={{ scale: scaleScroll }}
            initial={{ height: 0 }}
            animate={{ height: 420 }}
            transition={transitionWithDelay}
            alt={data?.title}
            src={data && `../images/${data.src}`}
          />
          )}
        </ImageContainer>
        <Title variants={titleStagger}>
          {title.map((letter, index) => (
            <motion.h1
              key={(letter + index.toString())}
              variants={titleLetter}
            >
              {letter}
            </motion.h1>
          ))}
        </Title>
        <Text
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={transitionWithDelay}
        >
          {data?.content.map((paragraph, index) => (
            <div key={index}>{paragraph}</div>
          ))}
        </Text>

      </Content>
    </Container>
  );
};

export default Post;
