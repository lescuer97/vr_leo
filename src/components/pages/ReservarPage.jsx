import React from 'react';

import GamesItem from './GamesItem';

import * as games from '../assets/data/imgs.json';
import ReservaForm from './reservas/ReservaForm';

const ReservarPage = ({
  match: {
    params: { id },
  },
}) => {
  return (
    <>
      <div className="flex flex-row  justify-center  md:justify-end   bg-cover bg-right bg-opacity-25 back_image py-4">
        <ReservaForm id={id} />

        <div className="md:w-3/5  " />
      </div>
      <div className="flex md:flex-row flex-col justify-center md:space-x-5 md:space-y-0 space-y-5 mt-3 mb-6">
        {games.games.map((game) => (
          <GamesItem key={game.id} game={game} />
        ))}
      </div>
    </>
  );
};

export default ReservarPage;
