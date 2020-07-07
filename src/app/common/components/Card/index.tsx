import React from 'react';
import { ContainerMotion } from './styles';

interface Props{
  src: string,
}

const Card: React.FC<Props> = (props) => {
  const { src } = props;

  return (
    <ContainerMotion
      variants={{
        hidden: { y: 30, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
        },
      }}
    >
      <img
        src={`images/${src}`}
        alt=""
      />
    </ContainerMotion>
  );
};

export default Card;
