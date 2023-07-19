import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
export const ContainerPrincipalFooterStyled = styled.footer`
  width: 100%;
  background: var(--color-4);
  display: flex;
  justify-content: center;
  margin: 0 auto;

  & a {
    color: black;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
  }
  & a:hover {
    color: var(--color-2);
    transition: all 0.3s ease-in-out;
  }
`;

export const ContainerFooterStyled = styled.div`
  width: 100%;
  max-width: 1500px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ContainerSectionsAndLogoStyled = styled.div`
  display: flex;
  width: 100%;
  padding: 30px;
  justify-content: center;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SectionStyled = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    margin-top: 34px;
  }
  & h1 {
    font-weight: 800;
    font-size: 27px;
  }
`;

export const LinksContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 10px;

  @media (max-width: 768px) {
    display: ${({ show }) => (show ? 'flex' : 'none')};
  }
`;

export const DropdownIconStyled = styled.div`
  display: none;
  @media (max-width: 768px) {
    cursor: pointer;
    display: block;
  }
`;
export const ContainerIMGStyled = styled.div`
  width: 50%;
  text-align: center;

  @media (max-width: 768px) {
    text-align: left;
  }
  & img {
    width: 184px;
    height: 91px;
  }
`;

export const BottomSectionStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0px 40px;
  height: 60px;
`;
