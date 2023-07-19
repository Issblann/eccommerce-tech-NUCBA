import { styled } from "styled-components";
export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  margin-bottom: 60px;
  background: white;
  gap: 30px;
  height: calc(70vh - 100px);
  & img {
    width: 206px;
    height: 257px;
  }
  & button {
    width: 20%;
  }
`;

export const TitleStyled = styled.h1`
  color: var(--color-2);
  font-weight: 600;
`;
export const ParagraphStyled = styled.p`
  color: black;
`;
export const ContainerInfoStyled = styled.div`
  text-align: center;

  & p {
    margin-bottom: 50px;
  }
`;
