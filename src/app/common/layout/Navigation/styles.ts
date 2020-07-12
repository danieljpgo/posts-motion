import styled from 'styled-components';
import { Props } from '../../../styles/themes/types';

export const Container = styled.div`
  max-width: 1312px;
  margin: 0 auto;
  min-height: 100vh;
  padding: 0 ${(props: Props) => props.theme.unit * 2}px
`;

export const Content = styled.main`
  height: calc(100vh - 92px);
  overflow: auto;
  padding: ${(props: Props) => props.theme.unit}px 0 ${(props: Props) => props.theme.unit}px;

  ::-webkit-scrollbar {
    -webkit-appearance: none;
  }

  ::-webkit-scrollbar:vertical {
      width: 12px;
  }
  
  ::-webkit-scrollbar:horizontal {
      height: 12px;
  }
  
  ::-webkit-scrollbar-thumb {
      background-color: ${(props: Props) => props.theme.colors.divider};
      border-radius: ${(props: Props) => props.theme.unit}px;
  }

  ::-webkit-scrollbar-track {
    margin-top: ${(props: Props) => props.theme.unit * 2}px;
    margin-bottom: ${(props: Props) => props.theme.unit * 2}px
    
  }
`;
