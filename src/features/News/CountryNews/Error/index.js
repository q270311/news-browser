import { Wrapper, ErrorIcon } from "./styled";

const Error = () => (
  <Wrapper>
    <p>Ooops! Coś poszło nie tak...</p>
    <p>Sprawdź połączenie z Internetem.</p>
    <ErrorIcon />
  </Wrapper>
);

export default Error;
