import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import Vr from '../assets/svg/Vr';
import * as Coordinates from '../assets/data/coordinates.json';

const Map = () => {
  // FIXME  cuando cambia la resolucion de la ventana el tamnaño del mapa no se ajusta
  const [viewport, setViewport] = useState({
    latitude: 40.44646648625272,
    longitude: -3.7197100816941457,
    width: '90vw ',
    height: '40vh',
    zoom: 10.7,
    zIndex: 0,
    position: 'relative',
  });

  const [selectedLocal, setSelectedLocal] = useState(null);

  const [settings, setSettings] = useState({
    scrollZoom: false,
  });


  return (
    <div className="">
      <ReactMapGL
        style={{ position: 'relative' }}
        {...viewport}
        {...settings}
        
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN.toString()}
        mapStyle="mapbox://styles/lescuer97/ck8smt6s30qkb1inv05vw3kbj"
        onViewportChange={(view) => {
          setViewport(view);
        }}

      >
        {Coordinates.centros.map((centro) => (
          <Marker
            // style={{ position: 'relative' }}
            key={centro.id}
            latitude={centro.coordinates[0]}
            longitude={centro.coordinates[1]}
          >
            {' '}
            <button
              onClick={(e) => {
                e.preventDefault();
                setSelectedLocal(centro);
              }}
              type="button"
            >
              <Vr />
            </button>
          </Marker>
        ))}

        {selectedLocal ? (
          <Popup
            latitude={selectedLocal.coordinates[0]}
            longitude={selectedLocal.coordinates[1]}
            closeOnClick={false}
            onClose={() => {
              setSelectedLocal(null);
            }}
            className="md:w-250 md:h-32  rounded shadow flex flex-row "
          >
            <div>{selectedLocal.name}</div>{' '}
            <p>
              Equipos:
              {selectedLocal.equipos}
            </p>
            <h1 className="self-end text-blue-500">
              <a
                href={selectedLocal.maps_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                How to arrive?
              </a>
            </h1>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
};

export default Map;
