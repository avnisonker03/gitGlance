import React from "react";

export default function HeaderDetail({ userdata }) {
    return (
        <>
            <div className="max-w-screen-lg mx-auto">
            <div className="flex flex-col items-center justify-center bg-black p-4 w-full h-full">
                <div className="max-w-3xl w-full">
                    <img src={userdata.avatar_url} alt="User Avatar" className="lg:w-72 lg:h-72 md:w-64 md:h-64 rounded-full mx-auto mb-4" />
                    <div className="text-center">
                        {userdata.name && <h1 className="text-3xl md:text-2xl lg:text-3xl font-bold text-white">{userdata.name}</h1>}
                        {userdata.bio && <p className="text-lg md:text-sm lg:text-lg text-white">{userdata.bio}</p>}
                        {userdata.blog && <a href={userdata.blog} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-base md:text-lg lg:text-xl break-all">{userdata.blog}</a>}
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}
