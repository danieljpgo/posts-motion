import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Props } from '../../styles/themes/types';

export const Container = styled(motion.div)`
  padding-top: ${(props: Props) => props.theme.unit}px;
`;

export const ImageContainer = styled(motion.div)`
  width: 100%;
  height: 420px;
  overflow: hidden;
  border-radius: ${(props: Props) => props.theme.shapes.borderRadius}px;
  z-index: 3;
`;

export const Img = styled(motion.img)`
  width: 100%;
  object-fit: cover;
`;

export const Title = styled(motion.div)`
  padding: ${(props: Props) => props.theme.unit * 2}px 0;
  display: flex;
  z-index: 2;
  h1{
    font-size: ${(props: Props) => props.theme.fontSize.big}px;
    min-width: 10px
  }
`;

export const Text = styled(motion.div)`
  font-size: ${(props: Props) => props.theme.fontSize.medium}px;
  div{
    padding: ${(props: Props) => props.theme.unit}px 0;
  }
`;

export const SubHeader = styled(motion.div)`
  padding-bottom: ${(props: Props) => props.theme.unit}px;
  display: flex;
  justify-content: space-between;
`;
export const Back = styled(motion.div)`
  cursor: pointer;
  padding:
    0
    ${(props: Props) => props.theme.unit}px
    ${(props: Props) => props.theme.unit}px
    0; 
`;
export const Info = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  color: ${(props: Props) => props.theme.colors.subtext};
  font-size: ${(props: Props) => props.theme.fontSize.small}px;
`;

export const Content = styled.div`
  padding: 0 ${(props: Props) => props.theme.unit}px
`;
