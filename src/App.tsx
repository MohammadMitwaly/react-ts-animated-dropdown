import Navbar from "./components/Navbar";
import NavItem from "./components/NavItem";
import { ReactComponent as NotificationsIcon } from "./icons/notifications-circle-outline.svg";
import { ReactComponent as DocumentsIcon } from "./icons/albums-outline.svg";
import { ReactComponent as ChevronUpIcon } from "./icons/chevron-up-circle-outline.svg";
import { ReactComponent as ChevronForwardIcon } from "./icons/chevron-forward-circle-outline.svg";
import { ReactComponent as ArrowIcon } from "./icons/arrow-back-circle-outline.svg";
import { ReactComponent as ChartIcon } from "./icons/albums-outline.svg";
import { ReactComponent as AddIcon } from "./icons/add-circle-outline.svg";
import { ReactComponent as SettingsIcon } from "./icons/cog-outline.svg";

function App() {
  return (
    <Navbar>
      <NavItem icon="🍓" />
      <NavItem icon="🍓" />
      <NavItem icon="🍓" />
    </Navbar>
  );
}

export default App;
