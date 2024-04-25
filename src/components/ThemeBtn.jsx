import React, { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";


export default function ThemeBtn() {


    const [showThemes, setShowThemes] = useState(false);
    const themes = ["Light", "Dark"];
    const toggleThemes = () => {
        setShowThemes(!showThemes);
    };

    const [theme, setTheme] = useState("light");

    const handleTheme = (e) => {
        setTheme(e.target.innerText.toLowerCase());
        setShowThemes(false);
    }

    useEffect(() => {
        document.querySelector('html').classList.remove("light", "dark")
        document.querySelector('html').classList.add(theme)
    }, [theme])

    return (
        <>
            <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9"
                onClick={toggleThemes}
            >
               {theme==="light"?<SunIcon size={22} width={20} height={20}/>:<MoonIcon size={22} width={20} height={20}/>}

            </button>
            {showThemes && (
                <ul className="absolute bg-white shadow-md mt-32 w-32 rounded  dark:bg-gray-800 dark:text-white">
                    {themes.map((theme, index) => (
                        <button key={index} className="px-4 py-2 w-32 cursor-pointer text-start  dark:bg-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-500"
                            onClick={handleTheme}
                        >
                            {theme}
                        </button>
                    ))}
                </ul>
            )}

        </>
    )
}


