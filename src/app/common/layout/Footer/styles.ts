import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Props } from '../../../styles/themes/types';

export const Container = styled(motion.footer)`
  padding: 
    ${(props: Props) => props.theme.unit * 2}px
    0
    ${(props: Props) => props.theme.unit * 2}px
    0;
  border-top: solid 1px ${(props: Props) => props.theme.colors.divider};
  font-size: ${(props: Props) => props.theme.fontSize.small}px;
`;

export const About = styled.div`
  display: grid;
  grid-gap: ${(props: Props) => props.theme.unit / 2}px;
`;

export const Project = styled.div`
  display: grid;
  grid-gap: ${(props: Props) => props.theme.unit / 4}px;
  h2{
    font-size: ${(props: Props) => props.theme.fontSize.medium}px;
  }
  a{
    margin: 0 6px;
    text-decoration: none;
    color: ${(props: Props) => props.theme.colors.subtext};
    transition: color ease-in-out 0.2s;
    &:hover{
      color: ${(props: Props) => props.theme.colors.text};
    }
  }
`;

export const Contact = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Icons = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: ${(props: Props) => props.theme.unit / 4}px;
  font-size: ${(props: Props) => props.theme.fontSize.medium}px;
   a{
    margin: 0 6px;
    text-decoration: none;
    color: ${(props: Props) => props.theme.colors.text};
    transition: color ease-in-out 0.2s;
    display: flex;
    align-items: flex-end;
    &:hover{
      color: ${(props: Props) => props.theme.colors.subtext};
    }
  }
`;
