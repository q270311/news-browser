import styled from "styled-components";

export const Button = styled.button`
  border-radius: 5px;
  height: 36px;
  border 2px solid ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};

  :hover{
    background-color: ${({ theme }) => theme.color.grey};
  }
`;