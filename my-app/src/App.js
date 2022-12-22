import "./App.css";
import AllRoutes from "./AllRoutes/AllRoutes";
import Footer from "./Components/Footer";
import Navbar from "./Components/header/navbar/Navbar";

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
