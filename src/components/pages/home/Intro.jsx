import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../util/Button';

import vr from '../../assets/img/img_7.webp';

const Intro = () => {
  return (
    <>
      <div className="md:flex md:flex-row md:justify-center md:mt-5 md:space-x-5 flex flex-col space-y-6 md:space-y-0 py-6 ">
        <div className="md:w-1/3 flex flex-col items-center justify-center rounded-lg shadow-lg py-6">
          <p className="my-1 text-base text-center">
            Disfruta de una experiencia unica
          </p>
          <p className="my-1 text-base text-center">Only VR Store</p>

          <Link to="/reserva" className="lg:pd-4">
            <Button
              type="button"
              styling="blue"
              extra_style="shadow-lg mt-4 mb-3"
            >
              Reserva
            </Button>
          </Link>
        </div>

        <div className="md:w-1/3 hidden md:flex shadow-lg ">
          <img className="rounded-lg " src={vr} alt="vr headset" />
        </div>
      </div>
    </>
  );
};

export default Intro;
