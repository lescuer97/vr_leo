import React from 'react';
import { Link } from 'react-router-dom';
// import Modal from 'react-modal';

// import ReservaForm from '../pages/reservas/ReservaForm';

const Navbar = () => {
  // const [form, setForm] = useState(false);

  // const authContext = useContext(AuthContext);

  // const { logout } = authContext;
  return (
    <>
      <header className="shadow-md lg:px-12 lg:py-0 z-10 sticky  top-0 bg-gray-100 bg-opacity-100 px-6 py-2  flex flex-wrap items-center navbar_text">
        <div className="flex-1 flex justify-between items-center">
          <Link to="/">
            <svg
              className="inline change_color_svg "
              id="Layer_1"
              enableBackground="new 0 0 512 512"
              height="36"
              viewBox="0 0 512 512"
              width="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path d="m299.452 386.371c-27.984 9.338-58.852 9.336-86.916-.004-7.863-2.618-16.354 1.635-18.969 9.495-2.616 7.86 1.635 16.354 9.496 18.97 17.09 5.688 35.031 8.531 52.967 8.531s35.868-2.846 52.918-8.535c7.858-2.622 12.103-11.118 9.48-18.977-2.621-7.857-11.116-12.1-18.976-9.48z" />
                <path d="m430.736 97.999c-6.384-45.79-45.703-81.932-94.402-81.932h-17.134v-1.067c0-8.284-6.716-15-15-15h-96.4c-8.284 0-15 6.716-15 15v1.066h-17.133c-48.291 0-87.664 35.638-94.36 81.922-28.118 6.399-49.173 31.584-49.173 61.611v128.534c0 41.106 33.483 57.859 48.692 61.474 6.868 92.539 84.571 162.393 175.174 162.393 92.396 0 168.358-71.705 175.167-162.389 39.424-9.36 48.699-45.128 48.699-61.477v-128.534c.001-30.012-21.034-55.187-49.13-61.601zm-111.536-51.933h17.133c42.442 0 59.975 34.701 63.62 50.334h-80.753zm-96.4-16.066h66.4v66.4h-66.4zm-47.133 16.066h17.133v50.334h-80.691c9.729-40.756 46.651-50.334 63.558-50.334zm80.333 435.934c-74.035 0-137.32-56.086-144.904-130.667h73.97c18.407 0 36.417-7.459 49.412-20.464.077-.077.153-.155.229-.234 5.643-5.52 13.385-8.679 21.293-8.679 7.91 0 15.652 3.16 21.294 8.68.075.078.151.156.229.233 12.995 13.005 31.005 20.464 49.413 20.464h73.963c-7.533 73.301-69.642 130.667-144.899 130.667zm193.867-193.866c0 18.564-15.131 33.199-33.2 33.199h-89.731c-10.392 0-20.558-4.161-27.948-11.428-.081-.085-.163-.169-.246-.253-11.246-11.246-26.824-17.696-42.741-17.696-15.916 0-31.494 6.45-42.74 17.696-.083.083-.166.167-.247.252-7.391 7.268-17.557 11.429-27.948 11.429h-89.733c-18.012 0-33.2-14.572-33.2-33.199v-128.534c0-18.306 14.894-33.199 33.2-33.199h321.333c18.307 0 33.2 14.894 33.2 33.199v128.534z" />
              </g>
            </svg>
            <p className="inline ml-3">Leo's VR Store</p>
          </Link>
        </div>

        <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden block">
          <svg
            height="36"
            viewBox="0 -53 384 384"
            width="32"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current change_color_svg"
          >
            <path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
            <path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
            <path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
          </svg>
        </label>
        <input type="checkbox" className="hidden" id="menu-toggle" />

        <div
          className="hidden  lg:flex lg:items-center lg:w-auto w-full  "
          id="menu"
        >
          <nav>
            <ul className="lg:flex items-center justify-between text-base navbar_text pt-4 lg:pt-0">
              <li>
                <Link to="/" className="lg:pd-4 navbar_tile">
                  Inicio
                </Link>
              </li>
              {/* <li>
                <Link to="#" className="lg:pd-4 navbar_tile">
                  Ofertas
                </Link>
              </li> */}
              <li>
                <Link to="/locales" className="lg:pd-4 navbar_tile">
                  Locales
                </Link>
              </li>
              <li>
                <Link to="/reserva" className="lg:pd-4 navbar_tile">
                  Reserva
                </Link>
              </li>

              {/* <li>
                <button
                  className="lg:pd-4 navbar_tile"
                  type="button"
                  onClick={() => logout()}
                >
                  LOGOUT
                </button>
              </li> */}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
