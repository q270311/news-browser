import styled from "styled-components";

export const StyledFooter = styled.footer`
  grid-column: span 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  width: 100%;
  background: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    height: auto;
  } 
`;
