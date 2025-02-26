import { useState } from "react";
import NavBar from "./components/NavBar";
import RetrieveCatalog from "./components/RetrieveCatalog";
import ProductCard from "./components/ProductCard";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <RetrieveCatalog />
    </>
  );
}

export default App;
