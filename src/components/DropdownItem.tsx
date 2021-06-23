import { ReactElement } from "react";
import "../index.css";

type Props = {
  rightIcon?: ReactElement<any, any>;
  leftIcon?: ReactElement<any, any>;
  goToMenu?: string;
  activateMenu?: (val: string)=>void;
};

const DropdownItem: React.FC<Props> = ({ children, rightIcon, leftIcon, goToMenu, activateMenu}) => {

  const handleActivateMenu = () =>{
    if(activateMenu && goToMenu){
      activateMenu(goToMenu);
    }
  }

  return (
    <a href="#" className="menu-item" onClick={handleActivateMenu}>
      <span className="icon-button">{leftIcon}</span>
      {children}
      <span className="icon-right">{rightIcon}</span>
    </a>
  );
};

export default DropdownItem;
