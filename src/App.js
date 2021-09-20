import { useEffect } from "react";
import axios from "./api";

import "./index.css";
import { Navbar } from "./components";

export default function App() {
  useEffect(() => {
    async function fetchNewsData() {
      const response = await axios.get("/everything");
    }

    fetchNewsData();
  }, []);
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}
