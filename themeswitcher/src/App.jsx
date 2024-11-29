import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./Context/theme";
import Themebtn from "./components/Themebtn";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  // if we have not a functionality we can write  a same name method , it provider a functionality by auto
  // two method we  had make
  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
  };

  // how actual chenge in  a theme
  useEffect(() => {
      document.querySelector('html').classList.remove("light","dark")
      document.querySelector('html').classList.add(themeMode)
  }, [themeMode]);

  return (
    // here we wrap by themeprovider
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4"></div>
          <Themebtn/>
          <div className="w-full max-w-sm mx-auto">
          <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
