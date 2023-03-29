import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled.div.attrs({ className: "spinner-border" })`  
  height: 50px;
  width: 50px;
  color: gray;
`;
