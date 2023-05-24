import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
`;

export const StyledMenu = styled.menu`
  position: sticky;
  top: 0px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.color.mercury};
  color: ${({ theme }) => theme.color.black};
  overflow: auto;
`;

export const Title = styled.p`
  font-size: 25px;
  font-weight: bold;
  background: ${({ theme }) => theme.color.mercury};
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    font-size: 18px;
  }
`;

export const List = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0px;
`;

export const Item = styled.li`
  font-size: 15px;
  border-bottom: 1px solid ${({ theme }) => theme.color.mercury};
  padding: 10px 0px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    padding: 5px 0px;
  }
`;

export const StyledActiveLink = styled(NavLink)`
  color: ${({ theme }) => theme.color.black};
  text-decoration: none;

  &.active {
    font-size: 18px;
    font-weight: bold;
    text-decoration: none;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
      font-size: 15px;
    }
  }

  &:hover {
    color: ${({ theme }) => theme.color.grey};
    font-weight: bold;
    text-decoration: none;
  }
`;
