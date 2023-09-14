import { useEffect } from "react";
import { Overlay, ModalWin, Image, RentalCarBtn } from "./Modal.styled";

export const Modal = ({
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
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <Overlay
      onClick={(event) => {
        if (event.currentTarget === event.target) onClose();
      }}
    >
      <ModalWin>
        <Image src={img} alt={description} loading="lazy" />
        <div></div>
        <div>
          <p>Accessories and functionalities:</p>
        </div>
        <div>
          <p>Rental Conditions:</p>
        </div>
        <RentalCarBtn>Rental car</RentalCarBtn>
      </ModalWin>
    </Overlay>
  );
};
