import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0px 50px 0px 0px;
  padding: 0px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-row: auto;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.smallDevice}px) {
    grid-template-columns: 1fr;
    gap: 6px;
  }
`;

export const Tile = styled.div`
  margin: 10px;
  padding: 3px;
  border: 2px solid ${({ theme }) => theme.color.mercury};
  border-radius: 5px;
  text-align: justify;

  &:hover {
    border-color: ${({ theme }) => theme.color.black};
    cursor: pointer;
  }
`;

export const Paragraph = styled.p`
  margin: 0px;
`;
export const BoldParagraph = styled.span`
  font-weight: bold;
`;
