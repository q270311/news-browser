import { Wrapper, Spinner } from "./styled";

const Loader = () => (
  <Wrapper>
    <p>Trwa ładowanie danych</p>
    <Spinner />
  </Wrapper>
);

export default Loader;
