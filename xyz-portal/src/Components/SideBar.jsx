import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 bg-blue-500 text-white p-6 shadow-lg">

      <h1 className="text-3xl font-bold mb-10">
        XYZ Portal
      </h1>

      <nav className="flex flex-col gap-4">

        <Link
          to="/"
          className="hover:bg-blue-700 p-3 rounded-lg transition"
        >
          Home
        </Link>

        <Link
          to="/sales"
          className="hover:bg-blue-700 p-3 rounded-lg transition"
        >
          Sales Dashboard
        </Link>

        <Link
          to="/quality"
          className="hover:bg-blue-700 p-3 rounded-lg transition"
        >
          Quality Dashboard
        </Link>

        <Link
          to="/about"
          className="hover:bg-blue-700 p-3 rounded-lg transition"
        >
          About
        </Link>

      </nav>
    </div>
  );
}

export default Sidebar;