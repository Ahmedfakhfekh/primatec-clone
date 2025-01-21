import { Link } from 'react-router-dom';
import { jobs } from '../data/jobs';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function JobListings() {
  return (
    <div className="bg-white text-gray-900 full-page">
      <Navbar />
      <div className="flex-grow flex flex-col p-8 w-full">
        <h1 className="text-5xl mb-8 font-extrabold text-center text-blue-800">
          Explore Our Job Openings
        </h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto w-full">
          {jobs.map((job) => (
            <li
              key={job.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold text-blue-900">{job.title}</h2>
                <span className="text-sm text-white bg-blue-600 px-3 py-1 rounded-full">
                  {job.location}
                </span>
              </div>
              <p className="text-md mt-4 text-gray-600">{job.description.slice(0, 120)}...</p>
              <Link
                to={`/jobs/${job.id}`}
                className="inline-block text-blue-700 mt-4 font-medium hover:underline"
              >
                View Details
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default JobListings;
