import db from '../../firebase/firebase';

export const updateReserva = async (actReserva) => {
  console.log(actReserva);
  const res = await db
    .collection('local')
    .doc(`${actReserva.IDLocal}/reservas/${actReserva.id}`)
    .update(actReserva);

  return res;
};
export const deleteReserva = async (thing) => {
  const res = await db
    .collection('local')
    .doc(`${thing.IDLocal}`)
    .collection('reservas')
    .doc(thing.id)
    .delete();

  return res;
};

export const getReservas = async (key, local) => {
  if (!local) {
    return console.log("no way i'm looking for wthis");
  }

  var reservas = [];

  const res = await db
    .collection('local')
    .doc(`${local}`)
    .collection('reservas')
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        const reserva = doc.data();
        reserva.id = doc.id;
        reservas.push(reserva);
      });

      return reservas;
    });

  return res;
};

export const getReserva = async (key, item) => {
  const res = await db
    .collection('local')
    .doc(`${item.id_local}/reservas/${item.id_reserva}`)
    .get()
    .then((doc) => {
      const reserva = doc.data();
      reserva.id = doc.id;
      return reserva;
    });

  return res;
};

export const createReserva = async (nuevaReserva) => {
  // cambiar luego para que tome los datos de la forma para localizar la reserva
  const id = await db
    .collection('local')
    .doc(nuevaReserva.IDLocal)
    .collection('reservas')
    .add(nuevaReserva)
    .then((doc) => {
      return doc.id;
    });

  nuevaReserva.id = id;
};
