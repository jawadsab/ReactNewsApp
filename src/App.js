import axios from "./api";

import "./index.css";
import { Navbar,NewsContainer } from "./components";

export default function App() {
 
  return (
    <div className="App">
      <Navbar />
      <NewsContainer />
    </div>
  );
}
