import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Container,
  ImageContainer,
  Image,
  Content,
} from './styles';
import { fadeInUp, transition, transitionImg } from './animations';

interface Props{
  id: string,
  src: string,
  title: string,
  type: string,
  selected: boolean,
}

const Card: React.FC<Props> = (props) => {
  const {
    id,
    src,
    title,
    type,
    selected,
  } = props;
  const history = useHistory();

  function handleClick() {
    history.push(`/post/${id}`);
  }

  return (
    <Container
      variants={fadeInUp}
    >
      <ImageContainer onClick={() => handleClick()}>
        <Image
          alt=""
          src={`images/${src}`}
          transition={transition}
          whileHover={{ scale: 1.05 }}
          initial={{ height: 320 }}
          animate="animate"
          exit={selected
            ? {
              zIndex: 2,
              height: 0,
              scale: 1.05,
              transition: {
                delay: 0.1,
                ...transitionImg,
              },
            }
            : { opacity: 0 }}
        />
        <Content
          initial="initial"
          animate="animate"
          exit={{ opacity: 0 }}
          transition={transition}
        >
          <div>{type}</div>
          <h1>{title}</h1>
        </Content>
      </ImageContainer>
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
