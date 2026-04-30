import { Routes, Route } from "react-router-dom";

import Sidebar from "./Components/SideBar";

import Home from "./Pages/Home";
import Sales from "./Pages/Sales";
import Quality from "./Pages/Quality";
import About from "./Pages/About";

function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      
      <Sidebar />

      <div className="flex-1 p-6 overflow-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;