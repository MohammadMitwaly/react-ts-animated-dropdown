import { useState } from "react";
import { ReactElement } from "react";

type Props = {
  icon: ReactElement<any, any>;
};

const NavItem: React.FC<Props> = ({ icon, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <li className="nav-item">
      <a
        href="#"
        className="icon-button"
        onClick={() => setOpen((open) => !open)}
      >
        {icon}
      </a>
      {open && children}
    </li>
  );
};

export default NavItem;
