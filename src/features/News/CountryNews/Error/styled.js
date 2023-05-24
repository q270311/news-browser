import styled from 'styled-components';
import { ReactComponent as Error } from './error.svg';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorIcon = styled(Error)`
  height: 50px;
  width: 50px;
  color: gray;
`;
