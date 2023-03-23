import { StyledFooter} from "./styled";
import Clock from "../Clock";

const Footer = () => {
  return (
      <StyledFooter>
        <Clock />
        <p>Liczba aartykułów na stronie: 100</p>
      </StyledFooter>
  );
};

export default Footer;