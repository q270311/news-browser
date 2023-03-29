import { Wrapper, Spinner } from "./styled";

const Loader = () => {
  return (
    <Wrapper>
      <p>Trwa ładowanie danych</p>
      <Spinner />
    </Wrapper>
  );
};

export default Loader;