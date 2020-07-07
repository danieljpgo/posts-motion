import styled from 'styled-components';
import { Props } from '../../../styles/themes/types';

export const Container = styled.div`
  max-width: 1312px;
  margin: 0 auto;
  min-height: 100vh;
  padding: 0 ${(props: Props) => props.theme.unit * 2}px
`;

export const Content = styled.main`
  height: calc(100vh - 90px);
  overflow: auto;
  padding: ${(props: Props) => props.theme.unit}px 0 ${(props: Props) => props.theme.unit}px
`;
