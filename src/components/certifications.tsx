"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { certificates } from "@/lib/constants"

type ContentCertifications = {
  title: string
}

export default function Certifications({content}: {content: ContentCertifications}) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextCertificate = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length)
  }

  const prevCertificate = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length)
  }

  const currentCertificate = certificates[currentIndex]

  return (
    <div className="glass-card text-[#3e3e3e] dark:text-white rounded-2xl p-3 md:p-8 flex items-center md:justify-center w-full ml-auto mx-auto relative h-full max-lg:w-full hover:shadow-md hover:shadow-[#3e3e3e] transition-shadow bg-black/20 backdrop-blur-sm">
      <button
        onClick={prevCertificate}
        className="px-3 md:px-10 text-gray-800 rounded-md focus:outline-none absolute left-[-6px] top-auto hover:scale-110 transition-transform"
        aria-label="Previous certificate"
      >
        <div className="w-6 h-6 rounded-full border border-[#3e3e3e] dark:border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
          <ChevronLeft className="w-3 h-3 text-[#3e3e3e] dark:text-white" />
        </div>
      </button>

      <div className="flex flex-col justify-center w-full">
        <h2 className="text-2xl font-semibold">{content.title}</h2>

        <div className="w-full overflow-hidden flex justify-center items-center">
          <div className="p-4 w-full h-40 flex items-center justify-center mx-auto">
            <div className="text-center max-lg:text-sm">
              <Dialog>
                <DialogTrigger asChild className="z-50">
                  <button className="hover:underline hover:font-semibold transition-all duration-75 focus:outline-none">
                    <h3 className="text-lg text-center h-14 flex items-center justify-center cursor-pointer px-2">
                      {currentCertificate.title}
                    </h3>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] p-0">
                  <div className="relative">
                    <img
                      src={currentCertificate.link || "/placeholder.svg"}
                      alt={`${currentCertificate.title} Certificate`}
                      className="w-full h-auto object-contain"
                      crossOrigin="anonymous"
                    />
                  </div>
                </DialogContent>
              </Dialog>

              <p className="text-sm text-gray-400 text-center mt-5">{currentCertificate.institution}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-2">
          {certificates.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-gray-500" : "bg-gray-300"
              }`}
              aria-label={`Certificate ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <button
        onClick={nextCertificate}
        className="px-3 md:px-10 text-gray-800 rounded-md focus:outline-none absolute right-[-6px] top-auto hover:scale-110 transition-transform"
        aria-label="Next certificate"
      >
        <div className="w-6 h-6 rounded-full border border-[#3e3e3e] dark:border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
          <ChevronRight className="w-3 h-3 text-[#3e3e3e] dark:text-white" />
        </div>
      </button>
    </div>
  )
}
