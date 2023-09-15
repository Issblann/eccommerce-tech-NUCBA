import styled, { css } from 'styled-components';

export const ProductsContainer = styled.div`
  display: grid;
  place-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 400px);
  row-gap: 3.5rem;
  width: 100%;
  padding: 1rem 0;
  background: white;
  margin-bottom: 30px;
`;

export const ProductsCard = styled.div`
  background: none;
  width: 300px;
  height: 100%;
  border: 1px #e6ebf0 solid;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
    width: 100%;
    margin-bottom: 1rem;
  }
  h2 {
    font-weight: 600;
    margin: 0;
  }
  p {
    color: #666;
    font-size: 1.2rem;
  }
`;

export const ContainerPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background: var(--color-2);
    border: none;
    padding: 15px;
    width: 60%;
    border-radius: 10px;
  }
`;

export const CardPrice = styled.span`
  font-weight: 800;
  font-size: 1.25rem;
`;

export const ContainerButtons = styled.div`
  display: flex;
  width: 30%;
  padding: 10px;
  margin: auto;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 30px;
  margin-bottom: 40px;

  button {
    color: black;
  }
`;
