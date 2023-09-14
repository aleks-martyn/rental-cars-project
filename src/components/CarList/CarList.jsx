import { useState } from "react";
import { Car } from "../CarCard";
import { Modal } from "../Modal";
import { List } from "./CarList.styled";

export const CarList = ({ cars }) => {
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState(null);
  const [year, setYear] = useState(null);
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [type, setType] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");
  const [fuelConsumption, setFuelConsumption] = useState("");
  const [engineSize, setEngineSize] = useState("");
  const [accessories, setAccessories] = useState([]);
  const [functionalities, setFunctionalities] = useState([]);
  const [rentalPrice, setRentalPrice] = useState("");
  const [rentalCompany, setRentalCompany] = useState("");
  const [address, setAddress] = useState("");
  const [rentalConditions, setRentalConditions] = useState("");
  const [mileage, setMileage] = useState(null);

  const toggleModal = (
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
  ) => {
    setShowModal((prev) => !prev);
    setId(id);
    setYear(year);
    setMake(make);
    setModel(model);
    setType(type);
    setImg(img);
    setDescription(description);
    setFuelConsumption(fuelConsumption);
    setEngineSize(engineSize);
    setAccessories(accessories);
    setFunctionalities(functionalities);
    setRentalPrice(rentalPrice);
    setRentalCompany(rentalCompany);
    setAddress(address);
    setRentalConditions(rentalConditions);
    setMileage(mileage);
  };

  return (
    <>
      <List>
        {cars &&
          cars.map(
            ({
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
            }) => (
              <Car
                key={id}
                id={id}
                year={year}
                make={make}
                model={model}
                type={type}
                img={img}
                description={description}
                fuelConsumption={fuelConsumption}
                engineSize={engineSize}
                accessories={accessories}
                functionalities={functionalities}
                rentalPrice={rentalPrice}
                rentalCompany={rentalCompany}
                address={address}
                rentalConditions={rentalConditions}
                mileage={mileage}
                openModal={toggleModal}
              />
            )
          )}
      </List>
      {showModal && (
        <Modal
          id={id}
          year={year}
          make={make}
          model={model}
          type={type}
          img={img}
          description={description}
          fuelConsumption={fuelConsumption}
          engineSize={engineSize}
          accessories={accessories}
          functionalities={functionalities}
          rentalPrice={rentalPrice}
          rentalCompany={rentalCompany}
          address={address}
          rentalConditions={rentalConditions}
          mileage={mileage}
          onClose={toggleModal}
        />
      )}
    </>
  );
};
