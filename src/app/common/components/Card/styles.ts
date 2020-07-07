import styled from 'styled-components';
import { Props } from '../../../styles/themes/types';

export const Container = styled.div`
  border: solid 2px ${(props: Props) => props.theme.colors.divider};
  border-radius: ${(props: Props) => props.theme.shapes.borderRadius}px;
  height: 460px;
  
  flex: 0 0 40%;
  max-width: 40%;
  
  &:nth-child(4n + 1),
  &:nth-child(4n + 4) {
    flex: 0 0 60%;
    max-width: 60%;
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
