import React from "react";


export default function ContributionGraph({username}){
     const graphUrl = `https://ghchart.rshah.org/${username}`;
    // const graphUrl = `http://localhost:3000/contribution-graph-image`;

    return (
      <div className="bg-black p-4 shadow-md bg-dark-500  flex flex-col text-[#F8FAFC] w-full">
        <div className="border rounded-md w-full overflow-hidden">
        <h3 className="text-2xl font-semibold text-left underline mb-4 mt-4 mx-2">
          Contribution Graph
        </h3> 
        <img
          src={graphUrl}
          alt="Contribution Graph"
          style={{ width: "100%", alignItems: "center", wordSpacing: "1rem", margin:"1rem"}}
          id="contribution-graph"
         />
        </div>
         <hr className="mt-2 border-gray-100"/>
      </div>
    );  
}     

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const ContributionGraph = ({ username }) => {
//     const [graphUrl, setGraphUrl] = useState('');

//     useEffect(() => {
//         const fetchGraphUrl = async () => {
//             try {
//                 const response = await axios.post('http://localhost:3000/save-image-from-url', { username });
//                 setGraphUrl(response.data.graphUrl);
//             } catch (error) {
//                 console.error('Error fetching contribution graph:', error);
//             }
//         };
//         fetchGraphUrl();
//     }, [username]);

//     return (
//         <div className="bg-black p-4 shadow-md bg-dark-500  flex flex-col text-[#F8FAFC] w-full">
//             <div className="border rounded-md w-full overflow-hidden">
//                 <h3 className="text-2xl font-semibold text-left underline mb-4 mt-4 mx-2">
//                     Contribution Graph
//                 </h3>
//                 {graphUrl && <img
//                     src={graphUrl}
//                     alt="Contribution Graph"
//                     style={{ width: "100%", alignItems: "center", wordSpacing: "1rem", margin:"1rem"}}
//                     id="contribution-graph"
//                 />}
//             </div>
//             <hr className="mt-2 border-gray-100"/>
//         </div>
//     );
// };

// export default ContributionGraph;
