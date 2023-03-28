import styled from "styled-components";

export const Ul = styled.ul`
  list-style: none;
  margin: 0px;
  padding: 0px;
`;

export const Li = styled.li`
  margin: 10px;
  padding: 0px;
  border: 2px solid ${({ theme }) => theme.color.mercury};
  border-radius: 5px;
  -webkit-box-shadow: 2px 2px 18px -17px rgba(66, 68, 90, 1);
  -moz-box-shadow: 2px 2px 18px -17px rgba(66, 68, 90, 1);
  box-shadow: 2px 2px 18px -17px rgba(66, 68, 90, 1);

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
