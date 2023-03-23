import { StyledHeader, NavigationLink} from "./styled";

const Header = () => {
  return (
      <StyledHeader>
        <NavigationLink to="/country" >
          News Browser
        </NavigationLink>
        <div>widok listy|kafelków</div>
      </StyledHeader>
  );
};

export default Header;