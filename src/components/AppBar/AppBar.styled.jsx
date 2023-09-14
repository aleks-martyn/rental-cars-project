import styled from "@emotion/styled";

export const Header = styled.header`
  display: flex;
  gap: 18px;
  margin-left: auto;
  margin-right: auto;
  width: 859px;
  height: 74px;
`;

export const Subtitle = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  color: var(--secondary-text-color);
`;

export const SearchBtn = styled.button`
  width: 136px;
  height: 48px;
  padding: 14px 44px;
  align-self: end;
  border: none;
  border-radius: 12px;
  color: var(--button-text-color);
  background-color: var(--accent-color);
  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;
`;
