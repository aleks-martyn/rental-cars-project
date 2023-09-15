import styled from "@emotion/styled";

export const Section = styled.section`
  padding-top: 100px;
  padding-bottom: 150px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
`;

export const LoadmoreBtn = styled.button`
  display: block;
  width: 100px;
  height: 24px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  border: none;
  border-radius: 12px;
  text-align: center;
  text-decoration: underline;
  color: var(--accent-color);
  background-color: transparent;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  transition: color var(--tra);

  &:hover {
    color: var(--button-active-color);
  }
`;
