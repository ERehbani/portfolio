import { useRef } from "react"
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

const InfiniteTextCarousel = () => {
  const plugin = useRef(
    Autoplay({
      delay: 1700, // Sin delay para movimiento continuo
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      stopOnFocusIn: false,
    }),
  )

  const technologies = [
    "/svg/astro.svg",
    "/svg/typescript.svg",
    "/svg/nextdotjs.svg",
    "/svg/tailwindcss.svg",
    "/svg/openai.svg",
    "/svg/mercado-pago.svg",
    "/svg/nodedotjs.svg",
    "/svg/react.svg",
    "/svg/shadcnui.svg",
    "/svg/daisyui.svg",
    "/svg/git.svg",
    "/svg/mongodb.svg",
    "/svg/prisma.svg",
    "/svg/postgresql.svg",
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
              <div className="px-8 h-full">
                <span className="text-2xl font-bold">
                  <img src={tech} alt="Elián Rehbani" width={60} height={60} className="bg-[#3e3e3e] p-2 rounded-md dark:bg-transparent w-12 h-12 lg:w-14 lg:h-14" />
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
