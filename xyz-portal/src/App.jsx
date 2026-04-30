import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import Sales from "./pages/Sales";
import Quality from "./pages/Quality";
import About from "./pages/About";

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