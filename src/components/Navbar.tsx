type Props = {
  children: JSX.Element;
};

const Navbar: React.FC<Props> = ({ children }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{children}</ul>
    </nav>
  );
};

export default Navbar;
