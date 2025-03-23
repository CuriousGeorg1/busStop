import { Link } from "react-router";
import TemporaryDrawer from "./Drawer";
import "./components.css";
// simple header component. Should be changed later
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
