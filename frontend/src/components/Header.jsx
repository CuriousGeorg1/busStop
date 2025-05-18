import { Link } from "react-router";
import TemporaryDrawer from "./Drawer";
import "./components.css";

// Header component, can be updated to include more functionality
const Header = () => {
  return (
    <>
      <div className="navigation">
        <TemporaryDrawer />
      </div>
    </>
  );
};

export default Header;
