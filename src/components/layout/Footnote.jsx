import React from 'react';
import { Link } from 'react-router-dom';

const Footnote = () => {
  return (
    <footer className="" id="footer">
      <div className="inner">
        <h1 className="text-sm label flex justify-center ">
          This is a Example site made by leo.square
        </h1>
        <ul className="icons flex flex-col md:flex-row  justify-center my-2">
 
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer" className="icon fa-twitter">
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer" className="icon fa-instagram">
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/leonardo-escuer-ruiz-56443311a/" target="_blank" rel="noopener noreferrer" className="icon fa-linkedin">
              <span className="label">LinkedIn</span>
            </a>
            
          </li>
          <li>
            <a href="https://www.leito.dev" target="_blank" rel="noopener noreferrer" className="icon ">
              <span className="label">Portafolio</span>
            </a>
          </li>
          <li className=" ">
            <Link className="icon  " to="/admin">
                <span className="label ">Admin</span>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footnote;
