import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const StyledMenu = styled.menu`
  margin: 0px;
  display: flex;
  flex-direction:column;
  background: ${({ theme }) => theme.color.mercury};
  color: ${({ theme }) => theme.color.black};  
`;

export const Title = styled.p`
  font-size: 20px;
  text-align: center;
  background: ${({ theme }) => theme.color.mercury};
  color: ${({ theme }) => theme.color.black};  
`;

export const List = styled.ul`
    width: 100%;
    list-style: none;
    padding:0px;
`;

export const Item = styled.li`
    display: flex;
    justify-content: center;
    font-size: 15px;
    border-bottom: 1px solid ${({ theme }) => theme.color.mercury};
    padding: 10px 0px;
`;
const activeClassName = "active";
export const StyledActiveLink = styled(NavLink).attrs(() => ({
  activeClassName,
}))`
    color: ${({ theme }) => theme.color.black};
    text-decoration: none;

    &.${activeClassName}{
        font-weight: bold;
    };
    

    &:hover{
        font-weight: bold;
    };
`;