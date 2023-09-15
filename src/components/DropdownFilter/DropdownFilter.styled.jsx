import styled from "@emotion/styled";

export const StyledForm = styled.form`
  display: flex;
  gap: 18px;
  width: 859px;
  height: 74px;
  margin-left: auto;
  margin-right: auto;
`;

export const Wrap = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  justify-content: space-between;
`;

export const InputWrap = styled.div`
  display: flex;
`;

export const Subtitle = styled.label`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  color: var(--secondary-text-color);
`;

export const SearchBtn = styled.button`
  min-width: 136px;
  height: 48px;
  padding: 14px 44px;
  align-self: end;
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
