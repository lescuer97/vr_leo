import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useMutation, queryCache } from 'react-query';
import { format } from 'date-fns';

import Modal from 'react-modal';

import { deleteReserva } from '../../util/Queries';


const ReservaItem = ({ reserva }) => {
  const [remove, setRemove] = useState(false);
  const [response, setResponse] = useState(false);


  const [mutate3, { status: deleteStatus, error: deleteError }] = useMutation(
    deleteReserva,
    {
      onSuccess: (data) => {
        queryCache.invalidateQueries('reservas');
      },
    }
  );

  // passed Prop from the data base
  const {
    id,
    cantidadEquipos,
    date,
    nombre,
    apellido,
    email,
    IDLocal,
  } = reserva;

  const onDelete = () => {
    setRemove(!remove);
  };
  useEffect(() => {
    if (deleteError != null) {
      setResponse(true);
      setTimeout(() => {
        setResponse(false);
      }, 1000);
    }
  }, [deleteError]);

  return (
    <>
      <tr>
        <td className="border px-4 py-1">
          {
            // new Date(date).toUTCString()
            format(new Date(date), 'MMMM do, yyyy hh:mm a')
          }
        </td>
        <td className="border px-4 py-1">
          <p>
            {nombre} {apellido}
          </p>
        </td>
        <td className="border px-4 py-1">{email}</td>

        <td className="border px-4 py-1">{id}</td>
        <td className="border px-4 py-1">{cantidadEquipos}</td>
        <td className="border px-4 py-1">
          {' '}
          <p className="mx-auto">
     
            <button
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-1 rounded-full `}
              onClick={onDelete}>
              <Link to={`reservas/${IDLocal}/${id}/edit`}>Edit</Link>
              </button>
            <button
              className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 m-1 rounded-full `}
              onClick={onDelete}>
                Delete
              </button>
      
          </p>
        </td>
      </tr>
      <Modal
        isOpen={remove}
        onRequestClose={() => {
          setRemove(!remove);
        }}
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
          <h1 className="text-center">
            are you sure you want to delete this Reservation?
          </h1>
          <h1 className="text-center">
            {' '}
            <button
              type="button"
              className="mr-3 simple-button"
              onClick={() => {
                mutate3({ id, IDLocal });
                setRemove(false);
              }}
            >
              YES
            </button>
            <button
              type="button"
              className="ml-3 simple-button"
              onClick={() => {
                setRemove(false);
              }}
            >
              NO
            </button>
          </h1>
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
          {deleteError && (
            <div>
              <h1 className="error_message">{deleteError.code}</h1>
              {deleteError.message}
            </div>
          )}
        </div>
      </Modal>
  
  
  
  
    </>
  );
};
ReservaItem.propTypes = {
  reserva: PropTypes.object.isRequired,
};

export default ReservaItem;
