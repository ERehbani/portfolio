import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { useTheme } from "@/lib/useTheme"

import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"
type Technology = {
  name: string
  iconDark: string
}

const InfiniteTextCarousel = () => {
  const { theme } = useTheme();

  const plugin = useRef(
    Autoplay({
      delay: 1700, // Sin delay para movimiento continuo
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      stopOnFocusIn: false,
    }),
  )

  const technologies: Technology[] = [
    {
      name: "Astro",
      iconDark: "/svg/astro.svg",
    },
    {
      name: "Typescript",
      iconDark: "/svg/typescript.svg",
    },
    {
      name: "Next.js",
      iconDark: "/svg/nextdotjs.svg",
    },
    {
      name: "React",
      iconDark: "/svg/react.svg",
    },
    {
      name: "Shadcn UI",
      iconDark: "/svg/shadcnui.svg",
    },
    {
      name: "DaisyUI",
      iconDark: "/svg/daisyui.svg",
    },
    {
      name: "Git",
      iconDark: "/svg/git.svg",
    },
  ]


  return (
    <div className="glass-card rounded-2xl w-full overflow-hidden flex items-center py-8 lg:py-0 h-full hover:shadow-md hover:shadow-[#3e3e3e] transition-shadow">
      <Carousel
        opts={{
          loop: true,
          align: "start",
          dragFree: true,
          containScroll: false, // Permite scroll continuo
        }}
        plugins={[plugin.current]}
        className="w-full "
      >
        <CarouselContent className="text-white flex items-center ">
          {/* Duplicamos los elementos para un efecto más suave */}
          {[...technologies, ...technologies].map((tech, index) => (
            <CarouselItem key={index} className="basis-auto flex-shrink-0 mx-auto flex justify-center ">
              <div className="px-8 h-full fill-blue-600">
                <span className="text-2xl font-bold text-blue fill-blue-600">
                  <img src={tech.iconDark} alt={tech.name} width={60} height={60} className="p-2 rounded-md dark:bg-transparent w-12 h-12 lg:w-14 lg:h-14 
                  brightness-[24.3%] dark:brightness-100" />
                </span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default InfiniteTextCarousel
