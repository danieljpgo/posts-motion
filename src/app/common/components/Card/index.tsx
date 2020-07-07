import React from 'react';
import { ContainerMotion } from './styles';
import { fadeInUp } from './animations';

interface Props{
  src: string,
}

const Card: React.FC<Props> = (props) => {
  const { src } = props;

  return (
    <ContainerMotion
      variants={fadeInUp}
    >
      <img
        src={`images/${src}`}
        alt=""
      />
    </ContainerMotion>
  );
};

export default Card;
