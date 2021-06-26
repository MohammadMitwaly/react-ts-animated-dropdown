import Navbar from "./components/Navbar";
import NavItem from "./components/NavItem";
import { ReactComponent as NotificationsIcon } from "./icons/notifications-circle-outline.svg";
import { ReactComponent as DocumentsIcon } from "./icons/albums-outline.svg";

import { ReactComponent as ChevronOpenIcon } from "./icons/chevron-down-circle-outline.svg";
import { ReactComponent as AddIcon } from "./icons/add-circle-outline.svg";
import DropdownMenu from "./components/DropdownMenu";

function App() {
  return (
    <Navbar>
      <NavItem icon={<AddIcon />} />
      <NavItem icon={<NotificationsIcon />} />
      <NavItem icon={<DocumentsIcon />} />

      <NavItem icon={<ChevronOpenIcon />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
  );
}

export default App;
