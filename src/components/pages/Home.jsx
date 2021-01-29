import React from 'react';
import Intro from './home/Intro';
import GamesItem from './GamesItem';
import Map from '../util/Map';

import * as games from '../assets/data/imgs.json';

const Home = () => {
  return (
    <>
      <Intro />
      <div className="mt-4">
        <h1 className="text-center font-medium navbar_text text-3xl ">
          {' '}
          Los mas jugados
        </h1>
        <div className="flex md:flex-row flex-col justify-center md:space-x-5 md:space-y-0 space-y-5 mt-3 mb-6">
          {games.games.map((game) => (
            <GamesItem key={game.id} game={game} />
          ))}
        </div>
        <h1 className="text-center font-medium navbar_text text-3xl">
          Nuestros Locales
        </h1>
        <div className="py-10 w-full flex justify-center ">
          <Map />
        </div>
      </div>
    </>
  );
};

export default Home;
