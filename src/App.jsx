import { useState, useEffect } from "react";
import "./App.css";
import Main from "./components/Main";
import Main1024 from "./components/Main1024";
import Main1250 from "./components/Main1250";
import Main720 from "./components/Main720";
import Main850 from "./components/Main850";
import Main500 from "./components/Main500";

function App() {
  const [currentComponent, setCurrentComponent] = useState(getComponent());

  function getComponent() {
    const width = window.innerWidth;
    if (width > 1250) return <Main />;
    if (width > 1024) return <Main1250 />;
    if (width > 850) return <Main1024 />;
    if (width > 720) return <Main850 />;
    if (width > 500) return <Main720 />
    return <Main500/>;
  }

  useEffect(() => {
    const handleResize = () => {
      setCurrentComponent(getComponent());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <div className="bg-[#262626] min-h-screen">{currentComponent}</div>;
}

export default App;
