import { useSelector } from "react-redux";
import { StyledFooter } from "./styled";
import { selectTotalResults } from '../News/newsSlice';
import Clock from "./Clock";

const Footer = () => {
  const totalResults = useSelector(selectTotalResults);
  return (
    <StyledFooter>
      <Clock />
      <p>Liczba artykułów na stronie: {totalResults}</p>
    </StyledFooter>
  );
};

export default Footer;