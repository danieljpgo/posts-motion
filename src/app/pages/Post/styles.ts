import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Props } from '../../styles/themes/types';

export const Container = styled(motion.div)`
  
`;

export const Title = styled.div`
  padding: ${(props: Props) => props.theme.unit * 2}px 0;
  display: flex;
  justify-content: center;
`;

export const ImageContainer = styled(motion.div)`
  width: 100%;
  height: 430px;
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
`;

export const Image = styled(motion.img)`
  width: 100%;
  height: 420px;
  object-fit: cover;
`;

export const Content = styled.div`
  padding: ${(props: Props) => props.theme.unit * 2}px 0;
`;
