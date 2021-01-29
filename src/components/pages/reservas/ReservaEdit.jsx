import React, { useState, useEffect } from 'react';

import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import { parseISO } from 'date-fns';
import es from 'date-fns/locale/es';
import 'react-datepicker/dist/react-datepicker.css';
import { updateReserva, getReserva } from '../../util/Queries';
import { useAlert } from '../../util/Hooks';
import { useMutationHook, useQueryHook } from '../../util/queryHooks';

import Button from '../../util/Button';

const ReservaEdit = ({
  match: {
    params: { id_local, id_reserva },
  },
}) => {
  const [
    mutateUpdate,
    { status: updateStatus, error: updateError },
  ] = useMutationHook('reserva', updateReserva);

  const {
    status: reservaStatus,
    data: reservaEd,
    error: reservaErr,
  } = useQueryHook('reserva', getReserva, { id_reserva, id_local });

  const { alert, setAlert } = useAlert();

  // estado del date picker
  const [startDate, setStartDate] = useState(new Date());

  // modifica el formato del calendario
  registerLocale('es', es);
  setDefaultLocale('es');

  // estado de la forma
  const [reserva, setReserva] = useState({
    IDLocal: '',
    cantidadEquipos: '',
    nombre: '',
    apellido: '',
    email: '',
  });

  useEffect(() => {
    if (reservaEd) {
      setTimeout(() => {
        const ele = document.getElementById('IDLocal');

        ele.value = reservaEd.IDLocal;

        setReserva({
          IDLocal: reservaEd.IDLocal,
          cantidadEquipos: reservaEd.cantidadEquipos,
          nombre: reservaEd.nombre,
          apellido: reservaEd.apellido,
          email: reservaEd.email,
        });
        setStartDate(parseISO(reservaEd.date));
      }, 250);
    }
  }, [reservaEd]);

  const { IDLocal, cantidadEquipos, nombre, apellido, email } = reserva;

  const onChange = (e) => {
    setReserva({
      ...reserva,
      [e.target.name]: e.target.value,
    });
  };

  // envia en documento a la base de datos (Todavia no implementado)
  const onSubmit = async (e) => {
    e.preventDefault();

    if (IDLocal === '') {
      setAlert({ message: 'Please select a local', type: 'local' });
    }

    const actReserva = {
      cantidadEquipos: cantidadEquipos * 1,
      IDLocal,
      nombre,
      apellido,
      email,
      date: startDate.toISOString(),
      id: reservaEd.id,
    };
    mutateUpdate(actReserva);
  };

  return (
    <>
      {/* this comes from the global error handler */}
      {updateStatus === 'error' && (
        <div>
          <h1 className="error_message">{updateError.code}</h1>
          Error from the hook
        </div>
      )}
      {reservaErr && (
        <div>
          <h1 className="error_message">{reservaErr.code}</h1>
          {reservaErr.message}
        </div>
      )}

      <form
        className="flex flex-col md:max-w-md w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-2 mr-0 md:w-2/5 md:mt-2"
        onSubmit={onSubmit}
      >
        <div className="mb-2">
          <div>
            {' '}
            <label className="block text-gray-700 text-sm font-bold">
              Reserva
            </label>
            <select
              id="IDLocal"
              className="test"
              name="IDLocal"
              value={IDLocal}
              onChange={onChange}
              required
            >
              <option value="" />
              <option value="local_1">Getafe</option>
              <option value="local_2">Boadilla</option>
              <option value="local_3">Avenida de la Ilustracion</option>
              <option value="local_4">Tres Olivos</option>
            </select>
          </div>
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold">
            Cantidad Equipos:{' '}
          </label>
          <select
            className="test"
            name="cantidadEquipos"
            value={cantidadEquipos}
            onChange={onChange}
            required
          >
            <option />
            <option value="1"> 1</option>
            <option value="2"> 2</option>
            <option value="3"> 3</option>
            <option value="4"> 4</option>
          </select>
        </div>
        <div className="mb-2 test">
          <label className="block text-gray-700 text-sm font-bold ">
            Fecha:{' '}
          </label>
          <DatePicker
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
            }}
            locale="es"
            dateFormat="dd/MM/yyyy"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold">
            Nombre:{' '}
          </label>
          <input
            className="test"
            name="nombre"
            required
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={onChange}
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold">
            Apellido:{' '}
          </label>
          <input
            className="test"
            name="apellido"
            required
            type="text"
            placeholder="Apellido"
            value={apellido}
            onChange={onChange}
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold ">
            Email:{' '}
          </label>
          <input
            className="test"
            name="email"
            required
            type="email"
            placeholder="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div className="w-10 mt-4">
          <Button type="submit" styling="blue" extra_style="shadow-lg">
            Reserva
          </Button>
        </div>
      </form>
    </>
  );
};

export default ReservaEdit;
