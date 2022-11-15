import * as Styled from "./style";
import "./style.css";
import ImgSearch from "../../assets/images/icon-arrow.svg";

import { MapContainer, TileLayer, Polygon, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import axios from "axios";

// 123.123.123.123

export default function Main() {
  const [searchValue, setSearchValue] = useState("");
  const [infoIp, setInfoIp] = useState({});

  useEffect(() => {
    async function getApi() {
      const data = await axios
        .get(
          "https://api.ipgeolocation.io/ipgeo?apiKey=efe01aad39134dd2bbff761980ad35e7&ip="
        )
        .catch((err) => console.log(err));
      const infoData = {
        position: [data.data.latitude, data.data.longitude],
        ip: data.data.ip,
        city: data.data.city,
        code: data.data.country_code2,
        timezone: data.data.time_zone.offset,
        isp: data.data.isp,
      };


      setInfoIp(infoData);
    }

    getApi();
  }, []);

  useEffect(() => {

  }, [])

  

  function handleSearch(e) {
    const value = e.target.value;
    setSearchValue(value);
  }

    async function getIp() {
      const data = await axios
        .get(
          `https://api.ipgeolocation.io/ipgeo?apiKey=efe01aad39134dd2bbff761980ad35e7&ip=${searchValue}`
        )
        .catch((err) => {
          console.log(err);
          alert('Digite um id ou dominio válido');
          setSearchValue("");
        })
  
      const infoData = {
        position: [data.data.latitude, data.data.longitude],
        ip: data.data.ip,
        city: data.data.city,
        code: data.data.country_code2,
        timezone: data.data.time_zone.offset,
        isp: data.data.isp,
      };

      setInfoIp(infoData);


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
              onChange={(e) => handleSearch(e)}
            />

            <Styled.ContainerImg
            onClick={getIp}
            >
              <img src={ImgSearch}  />
            </Styled.ContainerImg>
          </label>
        </div>

        <Styled.ContainerInfo>
          <div>
            <span>endereço ip</span>
            <h2>{infoIp.ip}</h2>
          </div>

          <div>
            <span>localização</span>
            <h2>
              {infoIp.city}, {infoIp.code}{" "}
            </h2>
          </div>

          <div>
            <span>fuso horario</span>
            <h2>UTC-{infoIp.timezone}:00</h2>
          </div>

          <div>
            <span>isp </span>
            <h2>{infoIp.isp}</h2>
          </div>
        </Styled.ContainerInfo>
      </Styled.Container>

      {infoIp.position && (
        <MapContainer
          center={infoIp.position}
          zoom={15}
          scrollWheelZoom={true}
          className="container"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={infoIp.position}>
            <Popup>o destino de sua pesquisa</Popup>
          </Marker>
        </MapContainer>
      )}
    </>
  );
}
