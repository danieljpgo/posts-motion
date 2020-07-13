import React from 'react';
import { useHistory } from 'react-router-dom';
import ProgressiveImage from 'react-progressive-image';
import {
  Container,
  Text,
  Avatar,
  Date,
} from './styles';

const avatar = {
  src: '../images/avatar.jpeg',
  placeholder: '../images/compressed/avatar.jpeg',
};

const Header: React.FC = () => {
  const history = useHistory();

  function handleClick() {
    history.push('/home');
  }

  return (
    <Container>
      <Date onClick={() => handleClick()}>
        <Text>Tuesday, August 13th</Text>
        <h1>Today</h1>
      </Date>
      <Avatar>
        <ProgressiveImage
          src={avatar.src}
          placeholder={avatar.placeholder}
        >
          {(img: any) => (
            <img
              src={img}
              alt=""
            />

          )}
        </ProgressiveImage>
      </Avatar>
    </Container>
  );
};

export default Header;
