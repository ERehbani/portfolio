"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { certificates } from "@/lib/constants"

type ContentCertifications = {
  title: string
}

export default function Certifications({
  content,
}: {
  content: ContentCertifications
}) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextCertificate = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length)
  }

  const prevCertificate = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length)
  }

  const currentCertificate = certificates[currentIndex]

  return (
    <div className="glass-card text-[#3e3e3e] dark:text-white rounded-2xl p-3 md:p-8 flex items-center md:justify-center w-full ml-auto mx-auto relative h-full max-lg:w-full hover:shadow-md hover:shadow-[#3e3e3e] transition-shadow bg-black/20 backdrop-blur-sm 
    [@media(max-height:800px)]:p-2 [@media(max-height:800px)]:md:p-6
    [@media(max-height:700px)]:p-2 [@media(max-height:700px)]:md:p-4
    [@media(max-height:600px)]:p-1.5 [@media(max-height:600px)]:md:p-3
    [@media(max-height:500px)]:p-1 [@media(max-height:500px)]:md:p-2 [@media(max-height:565px)]:overflow-y-auto [@media(max-height:565px)]:overflow-x-hidden">
      
      <button
        onClick={prevCertificate}
        className="px-3 md:px-10 text-gray-800 rounded-md focus:outline-none absolute left-[-6px] top-auto hover:scale-110 transition-transform 
        [@media(max-height:700px)]:px-2 [@media(max-height:700px)]:md:px-6
        [@media(max-height:600px)]:px-1.5 [@media(max-height:600px)]:md:px-4
        [@media(max-height:500px)]:px-1 [@media(max-height:500px)]:md:px-3"
        aria-label="Previous certificate"
      >
        <div className="w-6 h-6 rounded-full border border-[#3e3e3e] dark:border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors 
        [@media(max-height:700px)]:w-5 [@media(max-height:700px)]:h-5
        [@media(max-height:600px)]:w-4 [@media(max-height:600px)]:h-4
        [@media(max-height:500px)]:w-3.5 [@media(max-height:500px)]:h-3.5">
          <ChevronLeft className="w-3 h-3 text-[#3e3e3e] dark:text-white 
          [@media(max-height:700px)]:w-2.5 [@media(max-height:700px)]:h-2.5
          [@media(max-height:600px)]:w-2 [@media(max-height:600px)]:h-2
          [@media(max-height:500px)]:w-1.5 [@media(max-height:500px)]:h-1.5" />
        </div>
      </button>

      <div className="flex flex-col justify-center w-full gap-4 
      [@media(max-height:800px)]:gap-3
      [@media(max-height:700px)]:gap-2
      [@media(max-height:600px)]:gap-1.5
      [@media(max-height:500px)]:gap-1">
        
        <h2 className="text-2xl font-semibold text-center
        [@media(max-height:800px)]:text-xl
        [@media(max-height:700px)]:text-lg
        [@media(max-height:600px)]:text-base
        [@media(max-height:500px)]:text-sm">
          {content.title}
        </h2>

        <div className="w-full overflow-hidden flex justify-center items-center">
          <div className="p-4 w-full h-40 flex items-center justify-center mx-auto 
          [@media(max-height:800px)]:p-3 [@media(max-height:800px)]:h-32
          [@media(max-height:700px)]:p-2 [@media(max-height:700px)]:h-28
          [@media(max-height:600px)]:p-2 [@media(max-height:600px)]:h-20
          [@media(max-height:500px)]:p-1 [@media(max-height:500px)]:h-16
          [@media(max-height:713px)]:max-h-20 [@media(max-height:713px)]:p-2
          ">
            
            <div className="text-center max-lg:text-sm">
              <Dialog>
                <DialogTrigger asChild className="z-50">
                  <button className="hover:underline hover:font-semibold transition-all duration-75 focus:outline-none">
                    <h3 className="text-lg text-center h-14 flex items-center justify-center cursor-pointer px-2 
                    [@media(max-height:800px)]:text-base [@media(max-height:800px)]:h-12
                    [@media(max-height:700px)]:text-sm [@media(max-height:700px)]:h-10
                    [@media(max-height:600px)]:text-xs [@media(max-height:600px)]:h-8 [@media(max-height:600px)]:px-1
                    [@media(max-height:500px)]:text-xs [@media(max-height:500px)]:h-6 [@media(max-height:500px)]:px-0.5">
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
              
              <p className="text-sm text-gray-400 text-center mt-3
              [@media(max-height:800px)]:mt-2 [@media(max-height:800px)]:text-xs
              [@media(max-height:700px)]:mt-2 [@media(max-height:700px)]:text-xs
              [@media(max-height:600px)]:mt-1 [@media(max-height:600px)]:text-xs
              [@media(max-height:500px)]:mt-1 [@media(max-height:500px)]:text-xs">
                {currentCertificate.institution}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-2 
        [@media(max-height:600px)]:space-x-1
        [@media(max-height:500px)]:space-x-0.5">
          {certificates.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors 
              [@media(max-height:700px)]:w-1.5 [@media(max-height:700px)]:h-1.5
              [@media(max-height:600px)]:w-1 [@media(max-height:600px)]:h-1
              [@media(max-height:500px)]:w-0.5 [@media(max-height:500px)]:h-0.5 ${
                index === currentIndex ? "bg-gray-500" : "bg-gray-300"
              }`}
              aria-label={`Certificate ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <button
        onClick={nextCertificate}
        className="px-3 md:px-10 text-gray-800 rounded-md focus:outline-none absolute right-[-6px] top-auto hover:scale-110 transition-transform 
        [@media(max-height:700px)]:px-2 [@media(max-height:700px)]:md:px-6
        [@media(max-height:600px)]:px-1.5 [@media(max-height:600px)]:md:px-4
        [@media(max-height:500px)]:px-1 [@media(max-height:500px)]:md:px-3"
        aria-label="Next certificate"
      >
        <div className="w-6 h-6 rounded-full border border-[#3e3e3e] dark:border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors 
        [@media(max-height:700px)]:w-5 [@media(max-height:700px)]:h-5
        [@media(max-height:600px)]:w-4 [@media(max-height:600px)]:h-4
        [@media(max-height:500px)]:w-3.5 [@media(max-height:500px)]:h-3.5">
          <ChevronRight className="w-3 h-3 text-[#3e3e3e] dark:text-white 
          [@media(max-height:700px)]:w-2.5 [@media(max-height:700px)]:h-2.5
          [@media(max-height:600px)]:w-2 [@media(max-height:600px)]:h-2
          [@media(max-height:500px)]:w-1.5 [@media(max-height:500px)]:h-1.5" />
        </div>
      </button>
    </div>
  )
}