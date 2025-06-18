import React, { useState,useEffect } from 'react';

const jobData = [
  {
    id: 1,
    title: "Financial Controller – Analyst",
    company: "Barclays",
    location: "Candor TechSpace, Noida",
    type: "Full time",
    techStack: ["Excel", "SAP", "Financial Modeling"],
    applyLink: "#"
  },
  {
    id: 2,
    title: "Cloud Data Engineer",
    company: "Barclays",
    location: "Gera Commerzone SEZ, Pune",
    type: "Full time",
    techStack: ["Azure", "Python", "SQL", "ETL"],
    applyLink: "#"
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Coderound.ai",
    location: "Remote",
    type: "Part time",
    techStack: ["React", "TailwindCSS", "JavaScript"],
    applyLink: "#"
  },
  {
    id: 4,
    title: "Backend Engineer",
    company: "Coderound.ai",
    location: "Mumbai",
    type: "Full time",
    techStack: ["Node.js", "Express", "MongoDB"],
    applyLink: "#"
  },
  {
    id: 5,
    title: "UI/UX Developer",
    company: "Coderound.ai",
    location: "Mumbai",
    type: "Full time",
    techStack: ["Figma", "Adobe XD", "HTML", "CSS"],
    applyLink: "#"
  },
  {
    id: 6,
    title: "DevOps Engineer",
    company: "Infosys",
    location: "Hyderabad",
    type: "Full time",
    techStack: ["Docker", "Kubernetes", "AWS", "CI/CD"],
    applyLink: "#"
  },
  {
    id: 7,
    title: "Mobile App Developer",
    company: "Zoho Corp",
    location: "Chennai",
    type: "Full time",
    techStack: ["Flutter", "Dart", "Firebase"],
    applyLink: "#"
  },
  {
    id: 8,
    title: "Machine Learning Intern",
    company: "TCS",
    location: "Remote",
    type: "Internship",
    techStack: ["Python", "TensorFlow", "Pandas", "NumPy"],
    applyLink: "#"
  },
  {
    id: 9,
    title: "Technical Support Associate",
    company: "Amazon",
    location: "Bangalore",
    type: "Full time",
    techStack: ["Communication", "Networking", "Linux"],
    applyLink: "#"
  },
  {
    id: 10,
    title: "Game Developer",
    company: "Ubisoft",
    location: "Pune",
    type: "Full time",
    techStack: ["Unity", "C#", "Game Physics"],
    applyLink: "#"
  }
];

const JobPortal = () => {
  const [locationFilter, setLocationFilter] = useState('');
  const [profileFilter, setProfileFilter] = useState('');

  const filteredJobs = jobData.filter(job =>
    job.location.toLowerCase().includes(locationFilter.toLowerCase()) &&
    job.title.toLowerCase().includes(profileFilter.toLowerCase())
  );

      return (
      <div data-aos="fade-up" data-aos-duration="2000">
        <h1 className="text-3xl font-bold text-gray-400 mb-6">Job Portal Dashboard</h1>
        <div className="flex flex-col md:flex-row max-w-[1240px] min-h-screen p-4 md:p-6 bg-gray-700 font-sans rounded-md">
        {/* Filter Sidebar */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0 md:pr-4">
          <div className="rounded-lg bg-gray-100 shadow p-4">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Filters</h2>

            {/* Location Filter */}
            <label className="block mb-2 text-sm text-gray-600">Location</label>
            <input
              type="text"
              placeholder="Enter a location"
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 text-sm mb-4"
            />

            {/* Profile Filter */}
            <label className="block mb-2 text-sm text-gray-600">Profile</label>
            <input
              type="text"
              placeholder="e.g., Developer, Analyst"
              value={profileFilter}
              onChange={(e) => setProfileFilter(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 text-sm"
            />

            <button
              onClick={() => {
                setLocationFilter('');
                setProfileFilter('');
              }}
              className="text-sm text-blue-600 mt-4 underline"
            >
              Clear Filters
            </button>
          </div>
        </div>

        {/* Job Listings */}
        <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div key={job.id} className="bg-gray-100 shadow rounded-lg p-5 hover:shadow-md transition">
                <h3 className="text-md font-bold text-gray-800 mb-3">{job.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{job.company}</p>
                <p className="text-sm text-gray-600 mb-2">
                  <i class="fa-solid fa-location-dot"></i> {job.location}
                </p>
                <p className="text-sm text-gray-600">
                  <i class="fa-solid fa-business-time"></i> {job.type}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                      {job.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                  </div>

                <a
                  href={job.applyLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Apply
                </a>
              </div>
            ))
          ) : (
            <div className="col-span-full text-white text-center">
              No jobs found matching your filters.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobPortal;