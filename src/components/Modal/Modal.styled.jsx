import styled from "@emotion/styled";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalWin = styled.div`
  box-sizing: border-box;
  width: 541px;
  height: 752px;
  padding: 40px;
  border-radius: 24px;
  background-color: var(--background-color);
`;

export const Image = styled.img`
  width: 461px;
  height: 248px;
  margin-bottom: 14px;
  object-fit: cover;
  border-radius: 14px;
  `;

  export const RentalCarBtn = styled.button`
  display: block;
  width: 168px;
  height: 44px;
  padding: 12px 50px;
  border: none;
  border-radius: 12px;
  text-align: left;
  color: var(--button-text-color);
  background-color: var(--accent-color);
  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;
  transition: background-color var(--tra);

  &:hover {
    background-color: var(--button-active-color);
  }
`;