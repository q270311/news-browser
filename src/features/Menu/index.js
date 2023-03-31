import {
  Wrapper,
  StyledMenu,
  Title,
  List,
  Item,
  StyledActiveLink,
} from "./styled";
import { useTranslation } from "../../core/useTranslation";

const Menu = () => {
  const translation = useTranslation();

  return (
    <Wrapper>
      <StyledMenu>
        <Title>{translation.menu.title}</Title>
        <List>
          {translation.menu.countries.map((country) => (
            <Item>
              <StyledActiveLink to={`/country/${country.symbol}`}>
                {country.name}
              </StyledActiveLink>
            </Item>
          ))}
        </List>
      </StyledMenu>
    </Wrapper>
  );
};

export default Menu;
