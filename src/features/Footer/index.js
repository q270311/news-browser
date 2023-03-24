import { useSelector } from "react-redux";
import { StyledFooter} from "./styled";
import { selectTotalResults } from '../newsListSlice';
import Clock from "../Clock";

const Footer = () => {
  const totalResults = useSelector(selectTotalResults);
  return (
      <StyledFooter>
        <Clock />
        <p>Number of articles: {totalResults}</p>
      </StyledFooter>
  );
};

export default Footer;