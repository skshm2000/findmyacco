import Allroutes from "./pages/Allroutes";
import "./App.css";
import { useLocation } from "react-router-dom";
import Navbar from "./pages/homepage/Navbar";
import Footer from "./pages/homepage/Footer";

function App() {
  const location = useLocation();

  return (
    <div className="w-screen h-screen">
      {!location.pathname.includes("/admin") && (
        <div className="h-20">
          <Navbar />
        </div>
      )}
      <div className="min-h-[calc(100%-441px)]">
        <Allroutes />
      </div>
      {!location.pathname.includes("/admin") && (
        <div className="h-80">
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
