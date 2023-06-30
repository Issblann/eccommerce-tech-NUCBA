import styled from "styled-components";

export const HeroContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-width: 320px;
  margin: auto;
  width: 100vw;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
export const StyledImage = styled.img`
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

  @media (max-width: 1024px) {
    position: static;
    width: 100%;
    -webkit-box-shadow: -8px 18px 31px 12px rgba(51, 51, 51, 0.39);
    -moz-box-shadow: -8px 18px 31px 12px rgba(51, 51, 51, 0.39);
    box-shadow: -8px 18px 31px 12px rgba(51, 51, 51, 0.39);
  }
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
