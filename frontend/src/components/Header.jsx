import { Link } from "react-router";

// simple header component. Should be changed later
const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favourite-stops">Favourite Stops</Link>
          </li>
          <li>
            <Link to="/bus-stops">Bus Stops</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
