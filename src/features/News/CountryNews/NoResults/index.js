import { Wrapper } from "./styled";
import noResultsImg from "./no-results.png";

const NoResults = () => (
  <Wrapper>
    <p>Niestety nic nie znaleziono...</p>
    <img src={noResultsImg} alt="no results" />
  </Wrapper>
);

export default NoResults;
