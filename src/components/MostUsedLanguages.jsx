import React, { useState, useEffect } from "react";

const MostUsedLanguages = ({ userdata }) => {
    const [languagesData, setLanguagesData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(userdata.repos_url);
                const repos = await response.json();
                console.log('repos:', repos);
                const promises = repos.map(repo => fetch(repo.languages_url).then(response => response.json()));
                const languagesDataArray = await Promise.all(promises);

                const languagesMap = languagesDataArray.reduce((acc, languages) => {
                    for (let lang in languages) {
                        if (acc[lang]) {
                            acc[lang] += languages[lang];
                        } else {
                            acc[lang] = languages[lang];
                        }
                    }
                    return acc;
                }, {});

                const totalBytes = Object.values(languagesMap).reduce((total, bytes) => total + bytes, 0);

                const languageData = Object.entries(languagesMap).map(([language, bytes]) => ({
                    language,
                    bytes,
                    percentage: totalBytes !== 0 ? ((bytes / totalBytes) * 100).toFixed(2) : 0
                }));

                // Sort the languages based on usage and get the top 5
                const topLanguages = languageData.sort((a, b) => b.bytes - a.bytes).slice(0, 5);

                setLanguagesData(topLanguages);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [userdata.repos_url]);



    return (   
        <>
         <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col md:flex-row justify-center gap-4 bg-black">
            <div className="flex-1 md:flex-none md:w-1/2 mx-2 my-2 lg:w-1/2">
                <div className="bg-black p-6 rounded-md shadow-md border">
                    <h2 className="text-lg font-lg mb-4 text-white underline">Most Used Languages:</h2>
                    <ul className="flex flex-col gap-2">
                        {languagesData.map(({ language, percentage }) => (
                            <li key={language} className="flex items-center text-lg space-x-1 text-white">
                                <span className="mr-2">{language}</span>
                                <div className="bg-blue-600 h-4 rounded mr-2" style={{ width: `${percentage}%` }}></div>
                                <span>{percentage}%</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="flex-1 md:flex-none md:w-1/2 mx-2 my-2 lg:w-1/3">
                <div className="bg-black p-6 rounded-md shadow-md border">
                    <h2 className="text-lg font-lg mb-4 text-white underline">Github Status:</h2>
                    <ul className="flex flex-col gap-2">
                        <li className="flex items-center text-lg space-x-1 text-white">
                            <span className="mr-2">Followers:&nbsp;&nbsp;{userdata.followers}</span>
                        </li>
                        <li className="flex items-center text-lg space-x-1 text-white">
                            Years on GitHub:&nbsp;&nbsp;{new Date().getFullYear() - new Date(userdata.created_at).getFullYear()}
                        </li>
                        <li className="flex items-center text-lg space-x-1 text-white">
                            Public Repositories:&nbsp;&nbsp;{userdata.public_repos}
                        </li>
                        <li className="flex items-center text-lg space-x-1 text-white">
                            <span className="mr-2">Stars Received:&nbsp;&nbsp;{0}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
     <hr className="mt-0.1 border-gray-100" />
     </>
    
      
      



    );
};

export default MostUsedLanguages;
