import { StyledHeader, NavigationLink} from "./styled";
import ListTileToggleButton from './ViewToggleButton';

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