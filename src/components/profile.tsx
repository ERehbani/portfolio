"use client";

import { Cake, MapPin, Send, Mail, FileDown, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import ToggleMode from "./ui/toggle-mode";

export default function ProfileCard() {
  const handleDownloadCV = (language: "es" | "en") => {
    const cvUrls = {
      es: "/cv-elian-rehbani-es.pdf",
      en: "/cv-elian-rehbani-en.pdf",
    };

    const link = document.createElement("a");
    link.href = cvUrls[language];
    link.download = `CV-Elian-Rehbani-${language.toUpperCase()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="glass-card flex flex-col justify-between gap-5 py-5 text-white lg:w-full h-fit lg:h-full rounded-2xl bg-black/20 backdrop-blur-sm hover:shadow-md hover:shadow-[#3e3e3e] transition-shadow">
      <ToggleMode />
      <section className="flex lg:flex-col gap-5 px-2 md:px-5 lg:px-0">
        <div className="bg-[#3e3e3e] p-2 rounded-2xl w-fit mx-auto aspect-square object-cover">
          <img
            width={270}
            height={270}
            src="/notion-face.png"
            alt="Profile"
            className="aspect-square rounded-2xl w-40 h-40 object-cover"
          />
        </div>
        <div className="flex flex-col mx-auto justify-center gap-5 items-center">
          <h1 className="text-2xl font-semibold dark:text-white text-[#3e3e3e]">Elián Rehbani</h1>
          <span className="text-xs md:text-sm bg-[#3e3e3e] py-2 px-4 rounded-full flex justify-around items-center text-center w-full  lg:w-fit">
            <div className="w-2 h-2 rounded-full bg-green-600 shadow-md shadow-green-700 animate-ping mr-2"></div>
            Open to work
          </span>
        </div>
      </section>

      <section className="grid grid-cols-2 lg:flex lg:flex-col gap-2 items-center px-2 lg:px-5">
        <span className="text-xs text-[#3e3e3e] dark:text-white lg:text-sm border border-gray-600 px-4 py-2 gap-2 rounded-full flex items-center justify-center">
          <Cake className="w-5 text-[#818181]" />
          25 NOV, 2003
        </span>
        <span className="text-xs text-[#3e3e3e] dark:text-white lg:text-sm border border-gray-600 px-4 py-2 gap-2 rounded-full flex items-center justify-center">
          <MapPin className="w-5 text-[#818181]" />
          Mar del Plata
          <img
            src="/svg/argentina.svg"
            alt="Argentina"
            className="w-6 h-6 aspect-square rounded-full object-cover"
            width={100}
            height={100}
          />
        </span>

        <div className="flex items-center gap-2 col-span-2">
          <a
            href="mailto:elianrhbn@gmail.com"
            className="text-sm flex items-center gap-2 justify-center py-3 w-full lg:w-fit lg:px-3 rounded-md bg-[#3e3e3e] dark:bg-white text-black hover:[&_svg]:text-white dark:hover:[&_svg]:text-black hover:text-white transition-colors"
          >
            <Mail className="w-5 text-white dark:text-[#3e3e3e] transition-all" />
            <span className="lg:hidden text-white">E-mail me</span>
          </a>
          <span className="hidden lg:block text-sm text-[#3e3e3e] dark:text-white">elianrhbn@gmail.com</span>
        </div>

        {/* <Button
          className="text-sm flex items-center gap-2 justify-center py-6 w-full rounded-md bg-[#1E1E1E] hover:bg-[#2A2A2A] transition-colors"
          onClick={() =>
            window.open("https://t.me/your_telegram_username", "_blank")
          }
        >
          <Send className="w-5 text-[#818181]" />
          Telegram me
        </Button> */}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="text-sm text-white lg:mt-10 flex items-center border-2 border-[#383838] gap-2 justify-center py-6 w-full rounded-md bg-[#3e3e3e] hover:bg-[#2A2A2A] transition-colors col-span-2">
              <FileDown className="w-5 text-white" />
              Download CV
              <ChevronDown className="w-4 h-4 ml-1" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-[#3e3e3e] border-gray-600">
            <DropdownMenuItem
              onClick={() => handleDownloadCV("es")}
              className="text-white hover:bg-[#2A2A2A] cursor-pointer"
            >
              <img
                src="/spanish.png"
                alt="Spanish"
                className="aspect-square rounded-full object-cover w-6 h-6 mr-2"
                width={16}
                height={16}
              />
              Descargar CV (Español)
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => handleDownloadCV("en")}
              className="text-white hover:bg-[#2A2A2A] cursor-pointer"
            >
              <img
                src="/english.png"
                alt="English"
                className="aspect-square rounded-full object-cover w-6 h-6 mr-2"
                width={16}
                height={16}
              />
              Download CV (English)
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </section>

      <div className="w-[90%] mx-auto h-[1px] bg-[#393939]"></div>

      <section className="w-[80%] mx-auto flex justify-around items-center h-full">
        <a
          href="https://github.com/ERehbani"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#3e3e3e] p-2 rounded-md dark:bg-transparent"
        >
          <img
            src="/svg/github.svg"
            alt="Elian Rehbani GitHub"
            className="w-8 h-8 aspect-square rounded-full object-cover hover:opacity-80 transition-opacity"
            width={100}
            height={100}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/elian-rehbani"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#3e3e3e] p-2 rounded-md dark:bg-transparent"
        >
          <img
            src="/svg/linkedin.svg"
            alt="Elian Rehbani LinkedIn"
            className="w-8 h-8 aspect-square object-cover hover:opacity-80 transition-opacity"
            width={100}
            height={100}
          />
        </a>
        <a
          href="https://www.upwork.com/freelancers/~01cb5ee7641e3347f8?mp_source=share"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#3e3e3e] p-2 rounded-md dark:bg-transparent"
        >
          <img
            src="/svg/upwork.svg"
            alt="Elian Rehbani Upwork"
            className="w-8 h-8 aspect-square object-cover hover:opacity-80 transition-opacity"
            width={100}
            height={100}
          />
        </a>
      </section>
    </div>
  );
}
