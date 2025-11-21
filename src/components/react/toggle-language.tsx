import React, { useEffect, useState } from "react";

const ToggleLanguage = () => {
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  const isSpanish = pathname == "/" || pathname == "/servicios";

  const map: Record<string, string> = {
  "/": "/en",
  "/en": "/",
  "/servicios": "/services",
  "/services": "/servicios"
};

const redirect = () => map[pathname] || "/";


  return (
    <a
      href={redirect()}
      className="p-2 w-fit rounded-lg border border-[#3e3e3e] dark:bg-[#3e3e3e] text-[#3e3e3e] dark:text-gray-200 dark:hover:bg-[#1e1e1e] hover:bg-[#1e1e1e] hover:[&_svg]:text-white transition-colors duration-200 h-fit text-sm"
    >
      {isSpanish ? (
        <img src="/spanish.png" alt="Spanish" width={100} height={100} className="size-5 object-cover rounded-full" />
      ) : (
        <img src="/english.png" alt="English" width={100} height={100} className="size-5 object-cover rounded-full" />
      )}
    </a>
  );
};

export default ToggleLanguage;
