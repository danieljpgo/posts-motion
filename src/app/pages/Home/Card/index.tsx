import React from 'react';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MotionContainer, MotionContent } from './styles';
import { fadeInUp, transition } from './animations';

interface Props{
  src: string,
  id: string,
}

const Card: React.FC<Props> = (props) => {
  const { src, id } = props;
  const history = useHistory();

  function handleClick() {
    history.push(`/post/${id}`);
  }

  return (
    <MotionContainer
      variants={fadeInUp}
    >
      <motion.img
        alt=""
        src={`images/${src}`}
        transition={transition}
        whileHover={{ scale: 1.1 }}
        onClick={() => handleClick()}
      />
      <MotionContent
        exit={{ opacity: 0 }}
        transition={transition}
      >
        teste
      </MotionContent>
    </MotionContainer>
  );
};

export default Card;
