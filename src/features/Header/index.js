import { StyledHeader, NavigationLink} from "./styled";
import SwitchListTile from '../SwitchListTile';

const Header = () => {
  return (
      <StyledHeader>
        <NavigationLink to="/country/US" >
          News Browser
        </NavigationLink>
        <SwitchListTile />
      </StyledHeader>
  );
};

export default Header;