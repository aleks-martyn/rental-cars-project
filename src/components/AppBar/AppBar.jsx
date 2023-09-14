import { Header, Subtitle, SearchBtn } from "./AppBar.styled";

export const AppBar = () => {
  return (
    <Header>
      <div>
        <Subtitle>Car brand</Subtitle>
      </div>
      <div>
        <Subtitle>Subtitlerice/ 1 hour</Subtitle>
      </div>
      <div>
        <Subtitle>Car mileage / km</Subtitle>
      </div>
      <SearchBtn>Search</SearchBtn>
    </Header>
  );
};
