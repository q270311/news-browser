import { StyledHeader, NavigationLink} from "./styled";
import ListTileToggleButton from './ListTileToggleButton';

const Header = () => {
  return (
      <StyledHeader>
        <NavigationLink to="/" >
          News Browser
        </NavigationLink>
        <ListTileToggleButton />
      </StyledHeader>
  );
};

export default Header;