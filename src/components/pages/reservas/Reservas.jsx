/* eslint-disable no-nested-ternary */
import React from 'react';

import { getReservas } from '../../util/Queries';
import Spinner from '../../assets/Spinner';
import ReservaItem from './ReservaItem';
import { useLocalStorage } from '../../util/Hooks';
import { useQueryHook } from '../../util/queryHooks';

const Reservas = () => {
  const { IDLocal, setIDLocal } = useLocalStorage();

  const { data, status } = useQueryHook('reservas', getReservas, `${IDLocal}`);
  // const { data, status } = useQuery(['reservas', `${IDLocal}`], getReservas);

  return (
    <>
      <div className="max-w-xs">
        <select
          className="test"
          name="IDLocal"
          value={IDLocal}
          onChange={(e) => {
            setIDLocal(e.target.value);
            localStorage.setItem('local', `${e.target.value}`);
          }}
        >
          <option value="local_1">Getafe</option>

          <option value="local_3">Avenida de la Ilustracion</option>
        </select>
      </div>
      {status === 'loading' ? (
        <Spinner />
      ) : status === 'error' ? (
        <div>Error...</div>
      ) : (
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Nombre Apellidos</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">ID Reserva</th>
              <th className="px-4 py-2">Cantidad Equipos</th>
              <th className="px-4 py-2">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map((reserva) => (
              <ReservaItem key={reserva.id} reserva={reserva} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Reservas;
