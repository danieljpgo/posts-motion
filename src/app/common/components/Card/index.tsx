import React from 'react';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ContainerMotion } from './styles';
import { fadeInUp } from './animations';

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
    <ContainerMotion
      variants={fadeInUp}
    >
      <motion.img
        alt=""
        whileHover={{ scale: 1.05 }}
        src={`images/${src}`}
        onClick={() => handleClick()}
      />
    </ContainerMotion>
  );
};

export default Card;
