import styled from 'styled-components';

export const Body = styled.div`
  background-color: white;
  border-radius: 5px;
  width: 700px;
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.smallDevice}px) {
    width: 100%;
  }
`;

export const Paragraph = styled.p`
  margin: 0px;
`;
export const BoldParagraph = styled.p`
  font-weight: bold;
`;
