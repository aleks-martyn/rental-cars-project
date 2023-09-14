import {
  StyledForm,
  Wrap,
  InputWrap,
  Subtitle,
  SearchBtn,
} from "./AppBar.styled";

export const AppBar = () => {
  return (
    <header>
      <StyledForm name="car-search-form">
        <Wrap>
          <Subtitle htmlFor="car-select">Car brand</Subtitle>

          <select name="cars" id="car-select">
            <option value="">Enter the text</option>
            <option value="Buick">Buick</option>
            <option value="Volvo">Volvo</option>
            <option value="Hummer">Hummer</option>
            <option value="Subaru">Subaru</option>
            <option value="Mitsubishi">Mitsubishi</option>
            <option value="Nissan">Nissan</option>
            <option value="Lincoln">Lincoln</option>
            <option value="GMC">GMC</option>
            <option value="Hyundai">Hyundai</option>
          </select>
        </Wrap>
        <Wrap>
          <Subtitle htmlFor="price-select">Price / 1 hour</Subtitle>

          <select name="prices" id="price-select">
            <option value="">To $</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
            <option value="60">60</option>
            <option value="70">70</option>
            <option value="80">80</option>
          </select>
        </Wrap>
        <Wrap>
          <Subtitle>Car mileage / km</Subtitle>
          <InputWrap>
            <label>
              From
              <input type="number" name="from" />
            </label>
            <label>
              To
              <input type="number" name="to" />
            </label>
          </InputWrap>
        </Wrap>
        <SearchBtn type="submit">Search</SearchBtn>
      </StyledForm>
    </header>
  );
};
