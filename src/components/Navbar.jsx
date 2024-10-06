import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">World Ranking</h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/compare">Compare Countries</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
