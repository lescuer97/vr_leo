import React from 'react';
import Map from '../util/Map';
import CentroItem from './locales/CentroItem';
import * as Coordinates from '../assets/data/coordinates.json';

const Locales = () => {
  return (
    <div className="flex flex-col items-center  space-y-6 divide-y-2">
      <h1 className="text-3xl underline">Locales</h1>

      <div className="py-10 w-full flex justify-center ">
        <Map />
      </div>

      <div
        className="md:flex md:flex-row 
       sm:only_one_down  md:space-x-10 md:space-y-0 space-y-5 
       justify-center  pt-10 "
      >
        {Coordinates.centros.map((centro) => (
          <CentroItem key={centro.id} centro={centro} />
        ))}
      </div>
    </div>
  );
};

export default Locales;
