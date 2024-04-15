import "./App.css";
import Header from "./components/Header/index.jsx";

// Outlet
import { Outlet } from "react-router-dom";

// ContextProvider
import { TrailsContextProvider } from "./context/trailsContext.jsx";
import Footer from "./components/Footer/index.jsx";

function App() {
  return (
    <TrailsContextProvider>
      <Header />
      <Outlet />
      <Footer />
    </TrailsContextProvider>
  );
}

export default App;
