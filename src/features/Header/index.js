import { StyledHeader, NavigationLink} from "./styled";
import ListTileToggleButton from './ViewToggleButton';
import LanguageToggleButton from './LanguageToggleButton'

const Header = () => {
  return (
      <StyledHeader>
        <NavigationLink to="/" >
          News Browser
        </NavigationLink>
        <ListTileToggleButton />
        <LanguageToggleButton />
      </StyledHeader>
  );
};

export default Header;