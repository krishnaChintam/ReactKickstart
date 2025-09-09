import { Outlet } from "react-router-dom";
import './App.css';
import ToastProvider from "./components/common/ToastProvider";

function App() {
  return (
    <div className="App">
      {/* Toast system available globally */}
      <ToastProvider />

      {/*It is used to render the pages and components based on the routes */}
      <Outlet />
    </div>
  );
}

export default App
