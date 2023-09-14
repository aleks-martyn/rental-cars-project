import {
  CarItem,
  Image,
  InfoWrap,
  InfoInnerWrap,
  OtherDataWrap,
  MainInfoText,
  InfoText,
  LearnMoreBtn,
} from "./CarCard.styled";

export const Car = (car) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
    rentalConditions,
    mileage,
    openModal,
  } = car;

  const shortAddress = address.split(",").slice(1).join(" ");
  const shortFunctionalities = functionalities[0]
    .split(" ")
    .slice(0, 2)
    .join(" ");

  const handleLearnMoreBtnClick = () =>
    openModal(
      id,
      year,
      make,
      model,
      type,
      img,
      description,
      fuelConsumption,
      engineSize,
      accessories,
      functionalities,
      rentalPrice,
      rentalCompany,
      address,
      rentalConditions,
      mileage
    );

  return (
    <CarItem>
      <Image src={img} alt={description} loading="lazy" />

      <InfoWrap>
        <InfoInnerWrap>
          <MainInfoText>
            {make}, {year}
          </MainInfoText>

          <MainInfoText>{rentalPrice}</MainInfoText>
        </InfoInnerWrap>

        <OtherDataWrap>
          <InfoText>{shortAddress}</InfoText>
          <InfoText>{rentalCompany}</InfoText>
        </OtherDataWrap>

        <OtherDataWrap>
          <InfoText>{type}</InfoText>
          <InfoText>{model}</InfoText>
          <InfoText>{id}</InfoText>
          <InfoText>{shortFunctionalities}</InfoText>
        </OtherDataWrap>
      </InfoWrap>

      <LearnMoreBtn type="button" onClick={handleLearnMoreBtnClick}>
        Learn more
      </LearnMoreBtn>
    </CarItem>
  );
};
