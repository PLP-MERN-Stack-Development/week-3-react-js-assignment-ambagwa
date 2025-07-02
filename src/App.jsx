import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/About";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import TaskManager from "./components/TaskManager";
import ApiFetcher from "./components/ApiFetcher";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [theme, setTheme] = useState("light");

  //Apply/remove dark class on root html tag
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-black dark:bg-gray-950 dark:text-white transition-colors duration-300">
      <Navbar onToggleTheme={toggleTheme} theme={theme} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tasks" element={<TaskManager />} />
          <Route path="/fetch" element={<ApiFetcher />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
