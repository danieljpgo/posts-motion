import React from 'react';
import { ContainerMotion } from './styles';
import { item } from './animations';

interface Props{
  src: string,
}

const Card: React.FC<Props> = (props) => {
  const { src } = props;

  return (
    <ContainerMotion
      variants={item}
    >
      <img
        src={`images/${src}`}
        alt=""
      />
    </ContainerMotion>
  );
};

export default Card;
