
import "leaflet/dist/leaflet";

import * as Styled from "./style";

import imgSearch from "../assets/images/icon-arrow.svg";
import imgLocal from "../assets/images/icon-location.svg";
import Map from "../components/Map";

function App() {
  const center = [-23.683173261302752, -46.65893196437166];

  return (
    <Styled.Container>
      <Styled.Header>
        <form>
          <h1>Rastreador de Endereço IP</h1>
          <label>
            <input type="text" placeholder="Digite o IP" />
            <button>
              <img src={imgSearch} alt="Botão de pesquisar por ip" />
            </button>
          </label>
        </form>

        <Styled.ContainerInfo>
          <div>
            <span>endereço de ip</span>
            <h2>192.212.174.101</h2>
          </div>

          <div>
            <span>localização</span>
            <h2>Brooklin, NY, 10001</h2>
          </div>

          <div>
            <span>fuso horário</span>
            <h2>UTC-05:00</h2>
          </div>

          <div>
            <span>isp</span>
            <h2>SpaceX Starlink</h2>
          </div>
        </Styled.ContainerInfo>
      </Styled.Header>

      <Map />

      
    </Styled.Container>
  );
}

export default App;
