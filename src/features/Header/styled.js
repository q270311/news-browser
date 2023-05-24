import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  grid-column: span 2;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 16px 50px;
  width: 100%;
  height: 150px;
  background: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    height: auto;
  }
`;

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 900;
  font-size: 50px;
  color: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    font-size: 25px;
  }

  :hover {
    color: ${({ theme }) => theme.color.white};
    text-decoration: none;
  }
`;
