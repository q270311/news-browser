import styled from 'styled-components';

export const Radio = styled.input.attrs({ type: 'radio' })`
  display: none;

  &:checked + label {
    border: 2px solid white;
  }

  &:not(:checked) + label {
    border: 2px solid black;
  }
`;

export const Label = styled.label`
  display: block;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
`;
