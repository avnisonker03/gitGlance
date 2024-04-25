import React, { useState, useEffect } from "react";
import Resume from './Resume';
import ContributionGraph from "./ContibutionGraph";
import DownloadButton from "./Download";

const FetchUserData = ({ username }) => {
    const userName=username;
    const token = import.meta.env.VITE_GITHUB_TOKEN;
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${username}`, {
                 });
                if (response.ok) {
                    const data = await response.json();
                    console.log(data);
                    setUserData(data);
                } else {
                    throw new Error('User not found');
                }
            } catch (error) {
                console.error('Error fetching GitHub data:', error);
                setUserData(null);
            }
        };

        fetchData();
    }, [username, token]);

   

    return (
        <>  
           <div className="w-full" id="capture">
            {userData && <Resume userdata={userData} />}
            {userData && <ContributionGraph username={userName}/>}
            </div>
            <DownloadButton fileName="resume"/>
        </>
    );
};

export default FetchUserData;
