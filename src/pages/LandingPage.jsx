import { Link } from 'react-router-dom';
import { jobs } from '../data/jobs';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ourValuesImage from '../assets/ourvalues.jpg';
import lifeAtPrimatec1 from '../assets/life1.jpg';
import lifeAtPrimatec2 from '../assets/life2.jpg';
import lifeAtPrimatec3 from '../assets/life3.jpg';
import lifeAtPrimatec4 from '../assets/life4.jpg';

function LandingPage() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <header className="bg-gradient-to-r from-blue-700 to-blue-500 text-white text-center p-16">
        <h1 className="text-5xl font-extrabold">Your journey starts here</h1>
        <p className="text-xl mt-4">Wherever in the world, you’re looking for a new role, chances are, we’re there.</p>
      </header>
      <section className="p-8">
        <h2 className="text-4xl mb-6 font-bold text-blue-800">Featured Jobs</h2>
        <p className="mt-4 text-black">
          We are currently looking for multiple positions across our offices. Check out all open positions.
        </p>
        <Link to="/jobs" className="mt-8 inline-block text-white bg-blue-600 px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
          View All Jobs
        </Link>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.slice(0, 2).map((job) => (
            <li key={job.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Link to={`/jobs/${job.id}`} className="block">
                <h3 className="text-2xl font-bold text-blue-900">{job.title}</h3>
                <p className="text-lg text-gray-700">{job.location}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="bg-grey-50 p-8 mt-8">
        <h2 className="text-4xl mb-6 font-bold text-blue-800">Our values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <p className="text-lg"> Respect, Collaboration and Integrity are at the heart of everything we do.</p>
          <br />
          <img src={ourValuesImage} alt="Our values" className="w-full h-auto rounded-lg shadow-md align-center" />
        </div>
      </section>
      <section className="p-8 mt-8">
        <h2 className="text-4xl mb-6 font-bold text-blue-800">Life at Primatec Engineering</h2>
        <p className="mt-4 text-lg text-gray-700 ">Working at <b> Primatec Engineering </b> means flexibility, trust and meaningful choices.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          <img src={lifeAtPrimatec1} alt="Life at Primatec 1" className="w-full h-auto rounded-lg shadow-md" />
          <img src={lifeAtPrimatec2} alt="Life at Primatec 2" className="w-full h-auto rounded-lg shadow-md" />
          <img src={lifeAtPrimatec3} alt="Life at Primatec 3" className="w-full h-auto rounded-lg shadow-md" />
          <img src={lifeAtPrimatec4} alt="Life at Primatec 4" className="w-full h-auto rounded-lg shadow-md" />
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default LandingPage;