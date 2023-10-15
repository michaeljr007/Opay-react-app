import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Rewards from "./pages/Rewards";
import Finance from "./pages/Finance";
import Cards from "./pages/Cards";
import Me from "./pages/Me";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";

function App() {
  // Preloader state
  const [isloading, setIsLoading] = useState(true);

  // Preloader timeout
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    };

    fakeDataFetch();
  }, []);

  return (
    // Show Preloader while isLoading is true
    <div className="App bg-gray-100 overflow-hidden">
      {isloading ? (
        <span>
          <Loader />
        </span>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/me" element={<Me />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
