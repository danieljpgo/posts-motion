import styled from 'styled-components';
import { Props } from '../../styles/themes/types';

export const Container = styled.div`
  
`;

export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-gap: ${(props: Props) => props.theme.unit * 2}px */
`;
