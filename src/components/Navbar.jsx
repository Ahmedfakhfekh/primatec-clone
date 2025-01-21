import { Link } from 'react-router-dom';
import logo from '../assets/primatec logo.png';

function Navbar() {
  return (
    <nav className="bg-blue-700 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="Primatec Logo" className="h-8 mr-2" />
      </div>
      <div className="space-x-4">
        <Link to="/" className="hover:underline text-white">Home</Link>
        <Link to="/jobs" className="hover:underline text-white">Jobs</Link>
        <a href="https://www.linkedin.com/company/primatec-engineering/" target="_blank" rel="noopener noreferrer" className="hover:underline text-white">LinkedIn</a>
      </div>
    </nav>
  );
}

export default Navbar;
