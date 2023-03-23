import { StyledMenu, Title, List, Item, StyledActiveLink } from "./styled";

const Menu = () => (
  <StyledMenu>
    <Title>Country</Title>
    <List>
      <Item>
        <StyledActiveLink to={`/country/US`} > US </StyledActiveLink>
      </Item>
      <Item>
        <StyledActiveLink to={`/country/PL`} > PL </StyledActiveLink>
      </Item>
      <Item>
        <StyledActiveLink to={`/country/EN`} > EN </StyledActiveLink>
      </Item>
      <Item>
        <StyledActiveLink to={`/country/DE`} > DE </StyledActiveLink>
      </Item>
      <Item>
        <StyledActiveLink to={`/country/FR`} > FR </StyledActiveLink>
      </Item>
    </List>
  </StyledMenu>
);

export default Menu;