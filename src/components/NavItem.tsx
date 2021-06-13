type Props = {
  icon: string;
};

const NavItem: React.FC<Props> = ({ icon }) => {
  return (
    <li className="nav-item">
      <a href="#" className="icon-button">
        {icon}
      </a>
    </li>
  );
};

export default NavItem;
