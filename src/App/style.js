import styled from "styled-components";
import bg from "../assets/images/pattern-bg.png";

export const Container = styled.main`
  min-height: 100vh;
  /* background-color: black; */
  color: white;
`;

export const Header = styled.header`
  height: 32vh;
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 30px;

  position: relative;

  form {
    margin: 0 auto;
    width: fit-content;
    text-align: center;
    padding: 0 10px;
  }

  h1 {
    font-weight: 500;
    font-size: 1.8em;
  }

  label {
    display: flex;
    justify-content: center;
    margin-top: 18px;
  }

  button {
    border: none;
    background-color: black;
    padding: 10px;
    border-end-end-radius: 8px;
    border-top-right-radius: 8px;
  }

  input {
    width: 100%;
    max-width: 280px;
    border: none;
    padding: 10px 15px;
    border-top-left-radius: 8px;
    border-end-start-radius: 8px;

    &:focus {
      outline: 0;
    }
  }
`;

// cointainerInfo
export const ContainerInfo = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: 1000px;
  background-color: white;
  box-shadow: 0 0 15px rgba(50, 50, 50, .2);

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  padding: 20px;
  border-radius: 8px;

  position: relative;
  bottom: -50px;
  z-index: 20;

  div {
    color: black;
    padding: 0 12px;
    border-right: 1px solid #c0c0c0;

    &:nth-child(4) {
      border: none;
    }
  }

  h2 {
    font-size: 1.3em;
    margin-top: 6px;
  }

  span {
    font-size: .8em;
    color: #606060;
    font-weight: 500;
    text-transform: uppercase;
  }
`;


// estiloizando o mapa
// export const map = styled.div`
//     background-color: blueviolet;
//     height: 68vh;
// `;
