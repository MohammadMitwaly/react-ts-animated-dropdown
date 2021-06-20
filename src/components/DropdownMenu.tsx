import DropdownItem from "./DropdownItem";
import { ReactComponent as ChevronUpIcon } from "../icons/chevron-up-circle-outline.svg";
import { ReactComponent as SettingsIcon } from "../icons/cog-outline.svg";
import "../index.css";

type Props = {};

const DropdownMenu: React.FC<Props> = ({ children }) => {
  return (
    <div className="dropdown">
      <DropdownItem>My Journeys</DropdownItem>
      {children}
      <DropdownItem leftIcon={<SettingsIcon />} rightIcon={<ChevronUpIcon />}>
        Settings
      </DropdownItem>
    </div>
  );
};

export default DropdownMenu;
