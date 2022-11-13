import * as Styled from "./style";
import "./style.css";
import ImgSearch from "../../assets/images/icon-arrow.svg";

import { MapContainer, TileLayer, Polygon, Marker, Popup } from "react-leaflet";
import { useState } from "react";

// 123.123.123.123

export default function Main() {
  const [searchValue, setSearchValue] = useState("");


  function valueSearch(e) {
    const value = e.target.value;
    let array = searchValue.split("");
    const regNumber = /[0-9] || ./;
    const regText = /[a-z]/;

    if (
      (regNumber.test(value) || value === ".") &&
      !regText.test(value) &&
      value !== "ç" &&
      value.length <= 15
    ) {

      if (
        (array.length === 3 && value !== ".") ||
        (array.length === 7 && value !== ".") ||
        (array.length === 11 && value !== ".")
      ) {
        array.push(".");
        array.push(value[value.length - 1]);
        setSearchValue(array.join(""));
      } else {
        setSearchValue(value);
      }
    } else {
      return;
    }
  }

  function getMapLocal() {
    const regSearch = /[0-9{3}].[0-9{3}].[0-9{3}].[0-9{3}]/;
    console.log(regSearch.test(searchValue));
  }

  const position = [-23.683320640109315, -46.659060710406116];

  return (
    <>
      <Styled.Container>
        <div>
          <h1>Rastreador de Endereço IP</h1>
          <label>
            <input
              type="text"
              placeholder="Busca por qualquer endereço IP ou domínio"
              value={searchValue}
              onChange={(e) => valueSearch(e)}
            />

            <Styled.ContainerImg onClick={getMapLocal}>
              <img src={ImgSearch} />
            </Styled.ContainerImg>
          </label>
        </div>

        <Styled.ContainerInfo>
          <div>
            <span>endereço ip</span>
            <h2>192.212.174.101</h2>
          </div>

          {/* <Styled.line/> */}

          <div>
            <span>localização</span>
            <h2>Broklyn, NY 10001</h2>
          </div>

          {/* <Styled.line/> */}

          <div>
            <span>fuso horario</span>
            <h2>UTC-05:00</h2>
          </div>

          {/* <Styled.line/> */}

          <div>
            <span>isp </span>
            <h2>SpaceX Starlink</h2>
          </div>
        </Styled.ContainerInfo>
      </Styled.Container>

      <MapContainer
        center={position}
        zoom={15}
        scrollWheelZoom={true}
        className="container"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>o destino de sua pesquisa</Popup>
        </Marker>
      </MapContainer>
    </>
  );
}
