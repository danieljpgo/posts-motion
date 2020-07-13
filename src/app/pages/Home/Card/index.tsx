import React from 'react';
import { useHistory } from 'react-router-dom';
import ProgressiveImage from 'react-progressive-image';
import { fadeInUp, transition, transitionImg } from './animations';
import {
  Container,
  ImageContainer,
  Image,
  Content,
} from './styles';

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
      <ImageContainer
        onClick={() => handleClick()}
        transition={transition}
        initial={{ height: 320 }}
        animate="animate"
        exit={selected
          ? {
            zIndex: 2,
            height: 0,
            scale: 1.05,
            backgroundColor: 'transparent',
            transition: {
              delay: 0.1,
              ...transitionImg,
            },
          }
          : {
            opacity: 0,
            backgroundColor: 'transparent',
          }}
      >
        <ProgressiveImage
          src={`images/${src}`}
          placeholder={`images/compressed/${src}`}
        >
          {(img: any) => (
            <Image
              alt={title}
              src={img}
              whileHover={{ scale: 1.05 }}
              exit={selected
                ? { scale: 1.05 }
                : {}}
              transition={transition}
            />
          )}
        </ProgressiveImage>
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
