import React, { useState } from "react";
import MainGrid from "./components/MainGrid";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const updateDarkTheme = (newState) => {
    setDarkTheme(newState);
  };

  return (
    <div className={darkTheme ? "dark" : "light"}>
      <div className="h-full bg-yellow-200 md:bg-orange-200 lg:bg-red-200 dark:bg-black">
        <Navbar updateDarkTheme={updateDarkTheme} />
        <MainGrid />
        <Footer />
      </div>
    </div>
  );
}

export default App;
