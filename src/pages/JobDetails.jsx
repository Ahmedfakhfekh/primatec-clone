import { useParams, Link } from 'react-router-dom';
import { jobs } from '../data/jobs';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function JobDetails() {
  const { id } = useParams();
  const job = jobs.find((job) => job.id === parseInt(id));

  if (!job) return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex flex-col p-8 w-full">
            <div className="bg-red-100 p-8 rounded-lg shadow-lg w-full border border-red-200 max-w-4xl mx-auto flex-grow text-center">
                <h1 className="text-4xl font-bold text-red-600">Job not found</h1>
                <p className="mt-4 text-lg text-red-500">The job you are looking for does not exist or has been removed.</p>
                <Link to="/jobs" className="text-white bg-red-600 px-6 py-3 mt-8 inline-block rounded-lg shadow-md hover:bg-red-700 transition">
                    Back to Jobs
                </Link>
            </div>
        </div>
        <Footer />
    </div>
);

return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex flex-col p-8 w-full">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full border border-gray-200 max-w-4xl mx-auto flex-grow">
                <h1 className="text-4xl font-bold text-blue-900">{job.title}</h1>
                <span className="text-sm text-white bg-blue-600 px-3 py-1 rounded-full mt-2 inline-block">
                    {job.location}
                </span>
                <p className="mt-6 text-lg text-gray-700">{job.description}</p>
                <h2 className="text-3xl mt-8 font-semibold text-blue-800">Requirements</h2>
                <ul className="list-disc list-inside mt-4 space-y-2">
                    {job.requirements.map((req, index) => (
                        <li key={index} className="text-md text-gray-600">{req}</li>
                    ))}
                </ul>
                <a
                    href={job.application}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-blue-600 px-6 py-3 mt-8 inline-block rounded-lg shadow-md hover:bg-blue-700 transition"
                >
                    Apply Now
                </a>
            </div>
        </div>
        <Footer />
    </div>
);
}
export default JobDetails;