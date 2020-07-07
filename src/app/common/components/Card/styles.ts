import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Props } from '../../../styles/themes/types';

export const ContainerMotion = styled(motion.div)`
  padding: ${(props: Props) => props.theme.unit}px;
  height: 320px;
  overflow: hidden;
  
  flex: 0 0 40%;
  max-width: 40%;
  
  &:nth-child(4n + 1),
  &:nth-child(4n + 4) {
    flex: 0 0 60%;
    max-width: 60%;
  }

  img{
    border-radius: ${(props: Props) => props.theme.shapes.borderRadius}px;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }


  @media only screen and (max-width: ${(props: Props) => props.theme.breakpoints.medium}px) {
    flex: 0 0 50%;
    max-width: 50%;

    &:nth-child(4n + 1),
    &:nth-child(4n + 4) {
      flex: 0 0 50%;
      max-width: 50%;
    }
  }

  @media only screen and (max-width: ${(props: Props) => props.theme.breakpoints.small}px) {
    flex: 1 0 100%;
    max-width: 100%;
    
    &:nth-child(4n + 1),
    &:nth-child(4n + 4) {
      flex: 1 0 100%;
      max-width: 100%;
    }
  }
`;
