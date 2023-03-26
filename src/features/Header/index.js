import { StyledHeader, NavigationLink} from "./styled";
import ToggleListTile from './ToggleListTile';

const Header = () => {
  return (
      <StyledHeader>
        <NavigationLink to="/" >
          News Browser
        </NavigationLink>
        <ToggleListTile />
      </StyledHeader>
  );
};

export default Header;