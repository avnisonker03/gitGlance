import React, { useEffect, useState } from 'react';

const TopRepositories = ({ userdata }) => {
  const [topRepositories, setTopRepositories] = useState([]);

  useEffect(() => {
    const fetchTopRepositories = async () => {
      const response = await fetch(userdata.repos_url);
      const repositories = await response.json();
      repositories.sort((a, b) => b.stargazers_count - a.stargazers_count);
      setTopRepositories(repositories.slice(0, 3));
    };

    fetchTopRepositories();
  }, [userdata]);

  return (
    <div className="w-full mx-auto bg-black">
      <h2 className="text-2xl font-bold mb-4 text-white mx-4 underline">Popular Repositories</h2>
      <ul className="flex flex-col gap-2 mx-auto mt-2">
        {topRepositories.map(repo => (
          <li key={repo.id} className="py-4">
            <p className='text-white text-2xl'>--<a href={repo.html_url} className="text-xl font-semibold text-blue-600 underline mx-4 break-all" target='blank'>{repo.name}</a></p>
            <p className="text-white text-lg mx-4">{repo.description || 'No description available'}</p>
            <p className="text-gray-300 text-lg mx-4">Language: {repo.language || 'Not specified'}</p>
            <p className="text-gray-300 text-lg mx-4">This repository has {repo.stargazers_count} stars and {repo.forks} forks. For more information about this repository click to visit</p>
           
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-lg underline mx-4 break-all">{repo.html_url}</a>
          </li>
        ))}
      </ul>
      <hr className="mt-0.1 border-gray-100" />
    </div>
  );
};

export default TopRepositories;

