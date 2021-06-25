import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import DropdownItem from "./DropdownItem";
import { ReactComponent as ChevronUpIcon } from "../icons/chevron-up-circle-outline.svg";
import { ReactComponent as SettingsIcon } from "../icons/cog-outline.svg";
import { ReactComponent as ArrowIcon } from "../icons/arrow-back-circle-outline.svg";

type Props = {};

const DropdownMenu: React.FC<Props> = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState("main");
  // This is to animate the height of the secondary menu
  const [menuHeight, setMenuHeight] = useState(null);

  const handleSetActiveMenu = (val: string) =>{
    setActiveMenu(val);
  }

  const calculateHeight = (element: { offsetHeight: any; }) =>{
    const height = element.offsetHeight;
    setMenuHeight(height);
  }

  return (
    <div className="dropdown" style={{height: menuHeight || undefined}}>
      <CSSTransition 
        in={activeMenu === "main"} 
        unmountOnExit 
        timeout={500} 
        classNames="menu-primary"
        onEnter={calculateHeight}
        >
          <div className="menu"
          >
            <DropdownItem>My Journeys</DropdownItem>
            {children}
            <DropdownItem 
            leftIcon={<SettingsIcon />} 
            rightIcon={<ChevronUpIcon />} 
            goToMenu="settings" 
            activateMenu={handleSetActiveMenu}>
              Settings
            </DropdownItem>
          </div>
      </CSSTransition>

      <CSSTransition 
        in={activeMenu === "settings"} 
        unmountOnExit 
        timeout={500} 
        classNames="menu-secondary"
        onEnter={calculateHeight}
        >
          <div className="menu">
            <DropdownItem leftIcon={<ArrowIcon/>} goToMenu="main" activateMenu={handleSetActiveMenu}/>
            <DropdownItem leftIcon={<SettingsIcon />} rightIcon={<ChevronUpIcon />}>
              Settings
            </DropdownItem>
            <DropdownItem leftIcon={<SettingsIcon />} rightIcon={<ChevronUpIcon />}>
              Settings
            </DropdownItem>
            <DropdownItem leftIcon={<SettingsIcon />} rightIcon={<ChevronUpIcon />}>
              Settings
            </DropdownItem>
            <DropdownItem leftIcon={<SettingsIcon />} rightIcon={<ChevronUpIcon />}>
              Settings
            </DropdownItem>
          </div>
      </CSSTransition>
    </div>
  );
};

export default DropdownMenu;
