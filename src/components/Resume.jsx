import React from "react";
import HeaderDetail from "./HeaderDetail";
import MostUsedLanguages from "./MostUsedLanguages";
import TopRepositiories from "./TopRepositiories";



export default function Resume({ userdata }) {
    return (
        <div>
         {userdata && <HeaderDetail userdata={userdata} />}
         {userdata && <MostUsedLanguages userdata={userdata} />}
         {userdata && <TopRepositiories userdata={userdata}/>}
              {/* {userdata && <ContributionGraph userdata={userdata} />} */}
        </div>
    );
};

