import { useState, useEffect } from 'react';

export const useAlert = () => {
  const [alert, setAlert] = useState({ message: null, type: null });

  useEffect(() => {
    if (alert.message && alert.type) {
      setTimeout(() => {
        setAlert({ message: null, type: null });
      }, 2500);
    }
  }, [alert]);

  return { alert, setAlert };
};

export const useLocalStorage = () => {
  const [IDLocal, setIDLocal] = useState(null);

  useEffect(() => {
    const local = localStorage.getItem('local');
    if (local) {
      setIDLocal(local);
    }
  }, []);
  return { IDLocal, setIDLocal };
};

export const firebase_error = () => {};
