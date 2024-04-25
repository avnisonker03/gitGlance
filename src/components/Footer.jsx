import React from "react";
import {Link} from "react-router-dom";
import {
    GitHubLogoIcon,
    LinkedInLogoIcon,
  } from "@radix-ui/react-icons";

export default function Footer(){
    const currentYear = new Date().getFullYear();

    const icons = [
      {
        title: "LinkedIn",
        href: "https://www.linkedin.com/in/avni-sonker-85a054256/",
        icon: <LinkedInLogoIcon height="20" width="20" />,
      },
      {
        title: "Github",
        href: "https://github.com/avnisonker03",
        icon: <GitHubLogoIcon height="20" width="20" />,
      },
    ];

    return (
        <footer className="mx-auto w-full cursor-default items-center justify-center backdrop-blur-sm py-4 text-center shadow-xl md:px-0  dark:bg-gray-800 dark:text-white">
          <section className="mx-auto flex w-full max-w-4xl flex-col items-center justify-between gap-y-4 shadow-xl md:flex-row md:gap-y-0">
            <Link href="/#">
              <span className="text-lg font-black flex flex-row items-center justify-center gap-2">
                <GitHubLogoIcon width="22" height="22" />
                git-glance
              </span>
            </Link>
    
            <p className="text-xs font-light">
              &copy; {currentYear} Made by Avni Sonker
            </p>
    
            <div className="flex gap-4">
              {icons.map((icon, index) => (
                <Link to={icon.href} target="_blank" key={index}>
                  {icon.icon}
                </Link>
              ))}
            </div>
          </section>
        </footer>
      );

}