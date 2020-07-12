import React from 'react';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Container, Content } from './styles';
import { fadeInUp, transition } from './animations';

interface Props{
  id: string,
  src: string,
  selected: boolean,
}

const Card: React.FC<Props> = (props) => {
  const { id, src, selected } = props;
  const history = useHistory();

  function handleClick() {
    history.push(`/post/${id}`);
  }

  return (
    <Container
      variants={fadeInUp}
    >
      <motion.img
        alt=""
        src={`images/${src}`}
        transition={{ duration: 6 }}
        // whileHover={{ scale: 1.05 }}
        initial="initial"
        animate="animate"
        exit={selected
          ? {
            position: 'fixed',
            borderRadius: 0,
            zIndex: 2,
            width: '100vw',
            height: 420,
            top: 209,
            left: 0,
          }
          : { opacity: 0 }}
        onClick={() => handleClick()}
      />
      <Content
        initial="initial"
        animate="animate"
        exit={{ opacity: 0 }}
        transition={transition}
      >
        teste
      </Content>
    </Container>
  );
};

export default Card;

// // x: 0,
// y: '-20vh',
// left: 0,

// // translateY: 209,
// // translateX: -200,
// scale: 1,
