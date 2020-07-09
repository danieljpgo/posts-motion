import React from 'react';
import { useHistory } from 'react-router-dom';
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
      <img
        alt=""
        src={`images/${src}`}
        onClick={() => handleClick()}
      />
    </ContainerMotion>
  );
};

export default Card;
