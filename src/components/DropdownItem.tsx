import { ReactElement } from "react";
import "../index.css";

type Props = {
  rightIcon?: ReactElement<any, any>;
  leftIcon?: ReactElement<any, any>;
};

const DropdownItem: React.FC<Props> = ({ children, rightIcon, leftIcon }) => {
  return (
    <a href="#" className="menu-item">
      <span className="icon-button">{leftIcon}</span>
      {children}
      <span className="icon-right">{rightIcon}</span>
    </a>
  );
};

export default DropdownItem;
