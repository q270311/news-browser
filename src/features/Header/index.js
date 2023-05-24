import { StyledHeader, NavigationLink } from './styled';
import ListTileToggleButton from './ViewToggleButton';
import LanguageToggleButton from './LanguageToggleButton';
import InfoButton from './InfoButton';

const Header = () => {
  return (
    <StyledHeader>
      <NavigationLink to="/">News Browser</NavigationLink>
      <InfoButton />
      <ListTileToggleButton />
      <LanguageToggleButton />
    </StyledHeader>
  );
};

export default Header;
