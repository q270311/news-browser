import { StyledMenu, Title, List, Item, StyledActiveLink } from "./styled";

const Menu = () => (
  <StyledMenu>
    <Title>Kraj</Title>
    <List>
      <Item>
        <StyledActiveLink to={`/country/US`} > US  - Stany Zjednoczone </StyledActiveLink>
      </Item>
      <Item>
        <StyledActiveLink to={`/country/PL`} > PL - Polska </StyledActiveLink>
      </Item>
      <Item>
        <StyledActiveLink to={`/country/EN`} > EN - Wielka Brytania </StyledActiveLink>
      </Item>
      <Item>
        <StyledActiveLink to={`/country/DE`} > DE - Niemcy </StyledActiveLink>
      </Item>
      <Item>
        <StyledActiveLink to={`/country/FR`} > FR - Francja </StyledActiveLink>
      </Item>
    </List>
  </StyledMenu>
);

export default Menu;