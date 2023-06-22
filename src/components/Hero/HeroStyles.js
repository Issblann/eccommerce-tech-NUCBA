import styled from "styled-components";

export const HeroContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  max-width: 1500px;
  min-width: 320px;
  margin: auto;
  width: 100vw;
`;
export const StyledImage = styled.img`
  max-width: 1500px;
  width: 100%;
  height: 100%;
`;
export const SubContainerHeroStyled = styled.div`
  display: flex;
  position: absolute;
  width: 30%;
  height: 30%;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  align-items: flex-start;
  background: #ffff;
  right: 0;
  -webkit-box-shadow: -8px 18px 31px 12px rgba(51, 51, 51, 0.69);
  -moz-box-shadow: -8px 18px 31px 12px rgba(51, 51, 51, 0.69);
  box-shadow: -8px 18px 31px 12px rgba(51, 51, 51, 0.69);
`;
export const TitleHeroStyled = styled.h1`
  font-size: 50px;
  font-weight: 700;
  line-height: 0%;
`;
export const ParagraphHeroStyled = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 0%;
`;

export const LinkToActionStyled = styled.a`
  color: var(--color-2);
  font-weight: 500;
  gap: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 15px;
`;
