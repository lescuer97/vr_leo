import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import Button from '../../util/Button';

const CentroItem = ({ centro }) => {
  const {
    id,
    name,
 
    city,
  
    equipos,
    horario,
    address,
    postcode,

  } = centro;


  return (
    <div
      className="w-screen md:min-w-md md:max-w-md 
     mx-1
    "
    >
      <div className="border border-gray-400  lg:border lg:border-gray-400 bg-white rounded  p-4 flex flex-col justify-between leading-normal shadow-lg">
        <div className="mb-2">
          <ul className="text-gray-700 text-base list-disc ml-6">
            <li className="text-gray-900 font-bold text-xl mb-2 underline ">
              {name}
            </li>
            <li>Capacidad: {equipos * 3}</li>

            <li>
              Direccion: {address}, {postcode}, {city}
            </li>

            <li>Horario: {horario.dias}</li>
            <li className="ml-4">{horario.horas[0]}</li>
            <li className="ml-4">{horario.horas[1]}</li>
          </ul>
          <div className="w-10 mt-4">
            <Link to={`/reserva/${id}`} className="lg:pd-4 ">
              <Button styling="blue" extra_style="shadow-lg">
                Reserva
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

CentroItem.propTypes = {
  centro: PropTypes.object.isRequired,
};

export default CentroItem;
