import { Wrapper } from "./styled";
import noResultsImg from "./no-results.png";
import { useTranslation } from "../../../../core/useTranslation";

const NoResults = () => {
  const translation = useTranslation();

  return (
    <Wrapper>
      <p>{translation.news.noResults}</p>
      <img src={noResultsImg} alt="no results" />
    </Wrapper>
  );
};

export default NoResults;
