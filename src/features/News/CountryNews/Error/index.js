import { Wrapper, ErrorIcon } from "./styled";
import { useTranslation } from "../../../../core/useTranslation";

const Error = () => {
  const translation = useTranslation();
  
  return (
    <Wrapper>
      <p>{translation.news.error.line1}</p>
      <p>{translation.news.error.line2}</p>
      <ErrorIcon />
    </Wrapper>
  );
};
export default Error;
