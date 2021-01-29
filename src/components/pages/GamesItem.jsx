import React from 'react';

const GamesItem = (props) => {
  const { name, imgName } = props.game;

  return (
    <div className="w-screen  md:w-1/4 p-4  ">
      <h1 className="text-center navbar_text mb-3 f text-xl font-medium antialiased underline">
        {name}
      </h1>

      <img
        className="border rounded-lg h-64  object-cover"
        src={require(`../assets/img/games/${imgName}`)}
        alt="top played game"
      />
    </div>
  );
};

export default GamesItem;
