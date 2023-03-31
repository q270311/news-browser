import styled from "styled-components";

export const PageWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 20% 1fr;
  grid-row: auto;
  grid-gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    grid-gap: 10px;
  }
`;
