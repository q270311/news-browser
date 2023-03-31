import { Wrapper, Spinner } from "./styled";
import { useTranslation } from "../../../../core/useTranslation";

const Loader = () => {
  const translation = useTranslation();

  return (
    <Wrapper>
      <p>{translation.news.loading}</p>
      <Spinner />
    </Wrapper>
  );
};

export default Loader;
