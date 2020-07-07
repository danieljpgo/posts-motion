import styled from 'styled-components';
import { Props } from '../../../styles/themes/types';

export const Container = styled.header`
  padding: ${(props: Props) => props.theme.unit}px 0;
  border-bottom: solid 1px ${(props: Props) => props.theme.colors.divider};
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.div`
  font-size: 14px;
  text-transform: uppercase;
  margin-bottom: ${(props: Props) => props.theme.unit / 4}px;
`;
