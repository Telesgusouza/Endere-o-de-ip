import styled from "styled-components";
import bg from "../../assets/images/pattern-bg.png";

export const Container = styled.main`
  /* height: 200px; */
  height: 35%;
  padding-top: 30px;

  background-image: url(${bg});

  label {
    display: flex;
    width: fit-content;
    margin: 0 auto;
  }

  h1 {
    text-align: center;
    color: white;
    margin-bottom: 20px;
    font-size: 1.85em;
  }

  input {
    width: 300px;
    padding: 10px 15px;
    border: none;

    border-top-left-radius: 8px;
    border-end-start-radius: 8px;

    &:focus {
      outline: 0;
    }
  }
`;

export const ContainerImg = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  border-end-end-radius: 8px;
  border-top-right-radius: 8px;

  cursor: pointer;

  img {
    width: 8px;
  }

  &:hover {
    /* background-color: ; */
  }
`;

export const line = styled.div`
  width: 1px;
  height: 100%;
  max-height: 50px;
  background-color: gray;

  margin: 0;
  padding: 0;
`;

export const ContainerInfo = styled.div`
  z-index: 20;
  position: relative;

  width: 90%;
  max-width: 900px;

  margin: 0 auto;
  margin-top: 30px;
  padding: 20px;
  border-radius: 10px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  justify-content: space-between;

  span {
    color: gray;
    text-transform: uppercase;
    font-size: 0.8em;
  }

  h2 {
    margin-top: 5px;
    font-size: 1.25em;
    text-transform: capitalize;
  }

  div {
    width: 100%;
    border-left: 1px solid #b0b0b0;
    padding: 0 20px;

    &:nth-child(1) {
      border: none;
    }
  }
`;
