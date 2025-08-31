"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Cake, ChevronDown, FileDown, Mail, MapPin } from "lucide-react"

type ContentProfile = {
  openToWork: string
  birthday: string
  sendEmail: string
  downloadCV: string
}

export default function ProfileCard({ content }: { content: ContentProfile }) {
  const handleDownloadCV = (language: "es" | "en") => {
    const cvUrls = {
      es: "/pdf/CV-Elian-Rehbani-2025.pdf",
      en: "/pdf/CV-Elian-Rehbani-2025-(EN).pdf",
    }
    const link = document.createElement("a")
    link.href = cvUrls[language]
    link.download = `CV-Elian-Rehbani-2025.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="glass-card text-white lg:w-full h-fit lg:h-full rounded-2xl bg-black/20 backdrop-blur-sm hover:shadow-md hover:shadow-[#3e3e3e] transition-shadow max-h-screen overflow-y-auto overflow-x-hidden ">
      <div className="flex flex-col justify-between gap-5 py-5 h-full max-h-[calc(100vh-2rem)] [&>*]:flex-shrink-0 [@media(max-height:700px)]:gap-3 [@media(max-height:700px)]:py-3 [@media(max-height:600px)]:gap-2 [@media(max-height:600px)]:py-2">
        <section className="flex lg:flex-col gap-5 px-2 md:px-5 lg:px-0 [@media(max-height:700px)]:gap-3 [@media(max-height:600px)]:gap-2">
          <div className="bg-[#3e3e3e] p-2 rounded-2xl w-fit mx-auto aspect-square object-cover [@media(max-height:700px)]:p-1.5 [@media(max-height:600px)]:p-1">
            <img
              width={270}
              height={270}
              src="/notion-face.png"
              alt="Profile"
              className="aspect-square rounded-2xl w-40 h-40 object-cover [@media(max-height:700px)]:w-32 [@media(max-height:700px)]:h-32 [@media(max-height:600px)]:w-24 [@media(max-height:600px)]:h-24"
            />
          </div>
          <div className="flex flex-col mx-auto justify-center gap-5 items-center [@media(max-height:700px)]:gap-3 [@media(max-height:600px)]:gap-2">
            <h1 className="text-2xl font-semibold dark:text-white text-[#3e3e3e] [@media(max-height:700px)]:text-xl [@media(max-height:600px)]:text-lg">
              Elián Rehbani
            </h1>
            <span className="text-xs md:text-sm bg-[#3e3e3e] py-2 px-4 rounded-full flex justify-around items-center text-center w-full lg:w-fit [@media(max-height:700px)]:py-1.5 [@media(max-height:700px)]:px-3 [@media(max-height:600px)]:py-1 [@media(max-height:600px)]:px-2 [@media(max-height:600px)]:text-xs">
              <div className="w-2 h-2 rounded-full bg-green-600 shadow-md shadow-green-700 animate-ping mr-2 [@media(max-height:600px)]:w-1.5 [@media(max-height:600px)]:h-1.5"></div>
              {content.openToWork}
            </span>
          </div>
        </section>

        <section className="grid grid-cols-2 lg:flex lg:flex-col gap-2 items-center px-2  lg:px-2 xl:px-5 [@media(max-height:700px)]:gap-1.5 [@media(max-height:600px)]:gap-1">
          <span className="text-xs text-[#3e3e3e] dark:text-white lg:text-sm border border-gray-600 px-4 py-2 gap-2 rounded-full flex items-center justify-center [@media(max-height:700px)]:px-3 [@media(max-height:700px)]:py-1.5 [@media(max-height:600px)]:px-2 [@media(max-height:600px)]:py-1 [@media(max-height:600px)]:text-xs [@media(max-height:600px)]:gap-1">
            <Cake className="w-5 text-[#818181] [@media(max-height:600px)]:w-4" />
            {content.birthday}
          </span>
          <span className="text-xs text-[#3e3e3e] dark:text-white lg:text-sm border border-gray-600 px-4 py-2 gap-2 rounded-full flex items-center justify-center [@media(max-height:700px)]:px-3 [@media(max-height:700px)]:py-1.5 [@media(max-height:600px)]:px-2 [@media(max-height:600px)]:py-1 [@media(max-height:600px)]:text-xs [@media(max-height:600px)]:gap-1">
            <MapPin className="w-5 text-[#818181] [@media(max-height:600px)]:w-4" />
            Mar del Plata
            <img
              src="/svg/argentina.svg"
              alt="Argentina"
              className="w-6 h-6 aspect-square rounded-full object-cover [@media(max-height:600px)]:w-4 [@media(max-height:600px)]:h-4"
              width={100}
              height={100}
            />
          </span>
          <div className="flex items-center justify-center gap-2 col-span-2 [@media(max-height:600px)]:gap-1 w-full max-[1130px]:flex-col min-[1130px]:flex-row">
            <a
              href="mailto:elianrhbn@gmail.com"
              className="text-sm flex items-center gap-2 justify-center py-3 w-full lg:w-fit lg:px-3 rounded-md bg-[#3e3e3e] dark:bg-white text-black hover:[&_svg]:text-white dark:hover:[&_svg]:text-black hover:text-white transition-colors [@media(max-height:700px)]:py-2 [@media(max-height:600px)]:py-1.5 [@media(max-height:600px)]:text-xs"
            >
              <Mail className="w-5 text-white dark:text-[#3e3e3e] transition-all [@media(max-height:600px)]:w-4" />
              <span className="lg:hidden text-white dark:text-[#3e3e3e]">{content.sendEmail}</span>
            </a>
            <span className="hidden lg:block text-sm text-center text-[#3e3e3e] dark:text-white [@media(max-height:600px)]:text-xs">
              elianrhbn@gmail.com
            </span>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="text-sm text-white lg:mt-10 flex items-center border-2 border-[#383838] gap-2 justify-center py-6 w-full rounded-md bg-[#3e3e3e] hover:bg-[#2A2A2A] transition-colors col-span-2 [@media(max-height:700px)]:lg:mt-6 [@media(max-height:700px)]:py-4 [@media(max-height:600px)]:lg:mt-3 [@media(max-height:600px)]:py-3 [@media(max-height:600px)]:text-xs">
                <FileDown className="w-5 text-white [@media(max-height:600px)]:w-4" />
                {content.downloadCV}
                <ChevronDown className="w-4 h-4 ml-1 [@media(max-height:600px)]:w-3 [@media(max-height:600px)]:h-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-[#3e3e3e] border-gray-600">
              <DropdownMenuItem
                onClick={() => handleDownloadCV("es")}
                className="text-white hover:bg-[#2A2A2A] cursor-pointer [@media(max-height:600px)]:text-xs"
              >
                <img
                  src="/spanish.png"
                  alt="Spanish"
                  className="aspect-square rounded-full object-cover w-6 h-6 mr-2 [@media(max-height:600px)]:w-4 [@media(max-height:600px)]:h-4"
                  width={16}
                  height={16}
                />
                Descargar CV (Español)
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleDownloadCV("en")}
                className="text-white hover:bg-[#2A2A2A] cursor-pointer [@media(max-height:600px)]:text-xs"
              >
                <img
                  src="/english.png"
                  alt="English"
                  className="aspect-square rounded-full object-cover w-6 h-6 mr-2 [@media(max-height:600px)]:w-4 [@media(max-height:600px)]:h-4"
                  width={16}
                  height={16}
                />
                Download CV (English)
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </section>

        <div className="w-[90%] mx-auto h-[1px] bg-[#393939] [@media(max-height:600px)]:w-[85%]"></div>

        <section className="w-[80%] mx-auto flex justify-around items-center h-fit [@media(max-height:600px)]:w-[75%]">
          <a
            href="https://github.com/ERehbani"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#3e3e3e] p-2 rounded-md dark:bg-transparent [@media(max-height:600px)]:p-1.5"
          >
            <img
              src="/svg/github.svg"
              alt="Elian Rehbani GitHub"
              className="w-8 h-8 aspect-square rounded-full object-cover hover:opacity-80 transition-opacity [@media(max-height:600px)]:w-6 [@media(max-height:600px)]:h-6"
              width={100}
              height={100}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/elian-rehbani"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#3e3e3e] p-2 rounded-md dark:bg-transparent [@media(max-height:600px)]:p-1.5"
          >
            <img
              src="/svg/linkedin.svg"
              alt="Elian Rehbani LinkedIn"
              className="w-8 h-8 aspect-square object-cover hover:opacity-80 transition-opacity [@media(max-height:600px)]:w-6 [@media(max-height:600px)]:h-6"
              width={100}
              height={100}
            />
          </a>
          <a
            href="https://www.upwork.com/freelancers/~01cb5ee7641e3347f8?mp_source=share"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#3e3e3e] p-2 rounded-md dark:bg-transparent [@media(max-height:600px)]:p-1.5"
          >
            <img
              src="/svg/upwork.svg"
              alt="Elian Rehbani Upwork"
              className="w-8 h-8 aspect-square object-cover hover:opacity-80 transition-opacity [@media(max-height:600px)]:w-6 [@media(max-height:600px)]:h-6"
              width={100}
              height={100}
            />
          </a>
        </section>
      </div>
    </div>
  )
}
