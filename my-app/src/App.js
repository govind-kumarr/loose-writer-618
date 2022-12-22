import "./App.css";
import AllRoutes from "./AllRoutes/AllRoutes";
import Footer from "./Components/Footer";
import LabPage from "./Pages/LabPage";
import Navbar from "./Components/header/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      {/* <LabPage /> */}
      <Footer />
    </div>
  );
}

export default App;
