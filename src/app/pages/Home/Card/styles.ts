import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Props } from '../../../styles/themes/types';

export const Container = styled(motion.div)`
  margin: ${(props: Props) => props.theme.unit}px;
  border-radius: ${(props: Props) => props.theme.shapes.borderRadius}px;
  height: 320px;
  overflow: hidden;
  cursor: pointer;
  flex: 0 0 calc(40% - ${(props: Props) => props.theme.unit * 2}px);
  max-width: calc(40% - ${(props: Props) => props.theme.unit * 2}px);
  
  &:nth-child(4n + 1),
  &:nth-child(4n + 4) {
    flex: 0 0 calc(60% - ${(props: Props) => props.theme.unit * 2}px);
    max-width: calc(60% - ${(props: Props) => props.theme.unit * 2}px);
  } 

  @media only screen and (max-width: ${(props: Props) => props.theme.breakpoints.medium}px) {
    flex: 0 0 calc(50% - ${(props: Props) => props.theme.unit * 2}px);
    max-width: calc(50% - ${(props: Props) => props.theme.unit * 2}px);

    &:nth-child(4n + 1),
    &:nth-child(4n + 4) {
      flex: 0 0 calc(50% - ${(props: Props) => props.theme.unit * 2}px);
      max-width: calc(50% - ${(props: Props) => props.theme.unit * 2}px);
    }
  }

  @media only screen and (max-width: ${(props: Props) => props.theme.breakpoints.small}px) {
    flex: 1 0 calc(100% - ${(props: Props) => props.theme.unit * 2}px);
    max-width: calc(100% - ${(props: Props) => props.theme.unit * 2}px);
    
    &:nth-child(4n + 1),
    &:nth-child(4n + 4) {
      flex: 1 0 calc(100% - ${(props: Props) => props.theme.unit * 2}px);
      max-width: calc(100% - ${(props: Props) => props.theme.unit * 2}px);
    }
  }
`;

export const ImageContainer = styled(motion.div)`
  position: relative;
  background: #a1a1a130;
`;

export const Image = styled(motion.img)`
  border-radius: ${(props: Props) => props.theme.shapes.borderRadius}px;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const Content = styled(motion.div)`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  padding: ${(props: Props) => props.theme.unit}px;
  display: grid;
  grid-gap: ${(props: Props) => props.theme.unit / 2}px;
  h1{
    font-size: ${(props: Props) => props.theme.fontSize.medium}px;
  }
`;
