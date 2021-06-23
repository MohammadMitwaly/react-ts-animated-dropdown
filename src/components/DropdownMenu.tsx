import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import DropdownItem from "./DropdownItem";
import { ReactComponent as ChevronUpIcon } from "../icons/chevron-up-circle-outline.svg";
import { ReactComponent as SettingsIcon } from "../icons/cog-outline.svg";
import "../index.css";

type Props = {};

const DropdownMenu: React.FC<Props> = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState("main");
  return (
    <div className="dropdown">
      <CSSTransition 
        in={activeMenu === "main"} 
        unmountOnExit 
        timeout={500} 
        lassNames="menu-primary">
          <div className="menu"
          >
            <DropdownItem>My Journeys</DropdownItem>
            {children}
            <DropdownItem leftIcon={<SettingsIcon />} rightIcon={<ChevronUpIcon />}>
              Settings
            </DropdownItem>
          </div>
      </CSSTransition>
    </div>
  );
};

export default DropdownMenu;
