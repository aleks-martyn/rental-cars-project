import {
  CarItem,
  ImgWrap,
  Image,
  FavoriteBtn,
  HeartIcon,
  InfoWrap,
  InfoInnerWrap,
  InfoOtherWrap,
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
    shortAddress,
    rentalConditions,
    mileage,
    openModal,
  } = car;

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
      shortAddress,
      rentalConditions,
      mileage
    );

  const handleFavoriteBtnClick = () => {
    console.log("Favorite");
  };

  return (
    <CarItem>
      <ImgWrap>
        <Image src={img} alt={description} loading="lazy" />
        <FavoriteBtn type="button" onClick={handleFavoriteBtnClick}>
          <HeartIcon />
        </FavoriteBtn>
      </ImgWrap>

      <InfoWrap>
        <InfoInnerWrap>
          <MainInfoText>
            {make}, {year}
          </MainInfoText>

          <MainInfoText>{rentalPrice}</MainInfoText>
        </InfoInnerWrap>

        <InfoOtherWrap>
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
        </InfoOtherWrap>
      </InfoWrap>

      <LearnMoreBtn type="button" onClick={handleLearnMoreBtnClick}>
        Learn more
      </LearnMoreBtn>
    </CarItem>
  );
};
