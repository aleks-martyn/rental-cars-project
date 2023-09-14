import styled from "@emotion/styled";

export const CarItem = styled.li`
  border-radius: 14px;
  overflow: hidden;
  cursor: pointer;

   &:hover > div > img::before {
    opacity: 0.5;
`;

export const Image = styled.img`
  position: relative;
  width: 274px;
  height: 268px;
  margin-bottom: 14px;
  object-fit: cover;
  border-radius: 14px;

  &::before {
    content: "";
    position: absolute;
    display: inline-block;
    width: 100%;
    height: 100%;
    background: var(--car-img-overlay-bg-grad);
    opacity: 0;
    transition: opacity var(--tra);
  }
`;

export const InfoWrap = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  margin-bottom: 28px;
`;

export const InfoInnerWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const OtherDataWrap = styled.div`
  display: flex;
  gap: 6px;
`;

export const MainInfoText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
`;

export const InfoText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: var(--info-text-color);
`;

export const LearnMoreBtn = styled.button`
  display: block;
  width: 274px;
  height: 44px;
  padding: 12px 90px;
  border: none;
  border-radius: 12px;
  text-align: center;
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