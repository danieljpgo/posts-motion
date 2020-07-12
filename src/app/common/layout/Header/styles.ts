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

export const Avatar = styled.div`
  height: 56px;
  width: 56px;

  img{
    border-radius: 50%;
    border: solid 2px ${(props: Props) => props.theme.colors.divider};
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const Date = styled.div`
  cursor: pointer;
  color: ${(props: Props) => props.theme.colors.subtext}
`;
