import CartWidget from "./CartWidget";
import Logo from "../logo.svg";
const NavBar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 shadow-lg rounded-b-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-3xl font-bold tracking-wider">
          <img src={Logo} alt="Logo" className="h-8 inline-block mr-2" />
        </div>

        <ul className="flex space-x-6">
          <li>
            <a
              href="#"
              className="text-white hover:text-blue-200 transition duration-300 ease-in-out text-lg"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-blue-200 transition duration-300 ease-in-out text-lg"
            >
              Productos
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-blue-200 transition duration-300 ease-in-out text-lg"
            >
              Categorías
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-blue-200 transition duration-300 ease-in-out text-lg"
            >
              Contacto
            </a>
          </li>
        </ul>

        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
