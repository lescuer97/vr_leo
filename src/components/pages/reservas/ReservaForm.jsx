import React, { useState, useEffect } from 'react';

import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';

import es from 'date-fns/locale/es';
import 'react-datepicker/dist/react-datepicker.css';
import Modal from 'react-modal';

import {  createReserva } from '../../util/Queries';
import { useAlert } from '../../util/Hooks';
import { useMutationHook } from '../../util/queryHooks';

// import Button from '../../util/Button';

const ReservaForm = (props) => {

    // estado de la forma
  const [reserva, setReserva] = useState({
    IDLocal: '',
    cantidadEquipos: '',
    nombre: '',
    apellido: '',
    email: '',
  });
  const [response, setResponse] = useState(false);

  const { id } = props;
 
  if (id) {
    reserva.IDLocal = id;
    setTimeout(() => {
      const ele = document.getElementById('IDLocal');

      ele.value = id;
    }, 10);
    
  }
  const { alert, setAlert } = useAlert();

  // estado del date picker
  const [startDate, setStartDate] = useState(new Date());

  // modifica el formato del calendario
  registerLocale('es', es);
  setDefaultLocale('es');


  const [
    mutateCreate,
    { status: createStatus, error: createError },
  ] = useMutationHook('reservas', createReserva);

  useEffect(() => {
    setReserva({
      IDLocal: '',
      cantidadEquipos: '',
      nombre: '',
      apellido: '',
      email: '',
    });
  }, []);

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

    const ele = document.getElementById('IDLocal');
    // crea un nuevo objeto convidando State del Form y Date Picker para enviar a la base de datos
    const nuevaReserva = {
      cantidadEquipos: reserva.cantidadEquipos * 1,
      IDLocal,
      nombre,
      apellido,
      email,
      date: startDate.toISOString(),
    };
    mutateCreate(nuevaReserva);

    setReserva({
      IDLocal: '',
      cantidadEquipos: '',
      nombre: '',
      apellido: '',
      email: '',
    });
  };
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    if (createStatus === 'success') {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 4000);
    }
  }, [createStatus]);

  useEffect(() => {
    if (createError != null) {
      setResponse(true);
      setTimeout(() => {
        setResponse(false);
      }, 1000);
    }
  }, [createError]);

  return (
    <>

      {/* this is comes from the local error handling hook */}
      {alert.type === 'local' && (
        <div className="error_message">{alert.message}</div>
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
              
              <option value="local_3">Avenida de la Ilustracion</option>
             
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
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg"
          >
            Reserva
          </button>
        </div>
      </form>
      <Modal
        isOpen={success}
        shouldCloseOnEsc
        shouldCloseOnOverlayClick
        // onRequestClose={setSuccess(false)}
        style={{
          content: {
            height: 200,
            width: 500,
            marginLeft: -300,
            marginTop: -300,
            left: '50%',
            top: '50%',
          },
        }}
      >
        <div>
          <h1>Your reservation was made successfuly</h1>
        </div>
      </Modal>
      <Modal
        isOpen={response}
        shouldCloseOnOverlayClick
        shouldCloseOnEsc
        closeTimeoutMS={500}
        style={{
          content: {
            height: 200,
            width: 500,
            marginLeft: -300,
            marginTop: -300,
            left: '50%',
            top: '50%',
          },
        }}
      >
        <div>
          {createError && (
            <div>
              <h1 className="error_message">{createError.code}</h1>
              {createError.message}
            </div>
          )}
        </div>
      </Modal>

      
    </>
  );
};

export default ReservaForm;
