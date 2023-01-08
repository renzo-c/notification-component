import NavBar from "./Components/NavBar/NavBar";
import { NotificationProvider } from "./hooks/useNotification";
import "./styles.css";

export default function App() {
  return (
    <NotificationProvider>
      <NavBar />
    </NotificationProvider>
  );
}
