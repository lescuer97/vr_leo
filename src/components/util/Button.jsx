import React from 'react';

const Button = (props) => {
  return (
    <button
      className={`bg-${props.styling}-500 hover:bg-${props.styling}-700 text-white font-bold py-2 px-4 m-1 rounded-full `}
      onClick={props.action}
    >
      {props.children}
    </button>
  );
};
export default Button;
