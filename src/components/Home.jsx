import React, { useState, useRef } from "react";
import FetchUserData from './FetchUserData';
export default function Home() {

    const [username, setUsername] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const resultsRef = useRef(null);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setSubmitted(true);
            setLoading(false);
            resultsRef.current.scrollIntoView({ behavior: 'smooth' });
        }, 2000); // Simulating a 2-second loading time, replace with actual data fetching
       
    };

    return (
        <>
            <main className="flex min-h-[83vh] flex-col items-center justify-center p-4 lg:px-24 dark:bg-gray-800 dark:text-white">
                <div className="relative flex flex-col w-full max-w-4xl gap-8 place-items-center">
                    {loading && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                            <p className="text-white text-lg font-bold">Fetching data...</p>
                        </div>
                    )}
                   {!submitted &&(
                    <div className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20 pointer-events-none">
                        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
                        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
                    </div>
                   )}
                   {!submitted &&(
                    <div className="flex flex-col items-center justify-center space-y-4 z-10 text-center">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black">
                            <span className="text-transparent bg-clip-text bg-gradient-to-br gradient-radial from-blue-500 to-blue-900">git-glance</span>
                        </h1>
                        <p className="text-xl md:text-2xl lg:text-4xl font-semibold">Give your&nbsp;
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-blue-700">GitHub</span>&nbsp;profile a professional edge with Git Glance's&nbsp;<span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-blue-700">dynamic portfolio</span>&nbsp;effortlessly.</p>
                    </div>
                   )}
                    {!submitted && (
                     <div className="flex w-full md:max-w-sm items-center space-x-4 md:space-x-8">
                            <form className="flex w-full space-x-3" onSubmit={handleSubmit}>
                                <input type="text" className="flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 h-12 flex-grow" placeholder="Enter your GitHub username"
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <button className="whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 py-2 h-12 px-6 flex items-center justify-center bg-blue-500" type="submit" disabled={loading}>Generate</button>
                            </form>
                        </div>
                    )}
               <div ref={resultsRef} className="w-full"></div>
                    {submitted && <FetchUserData username={username} />}
                </div>
            </main>
        </>
    );
}
