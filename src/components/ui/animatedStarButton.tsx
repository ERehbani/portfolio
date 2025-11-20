'use client'

import { SquareArrowOutUpRight } from 'lucide-react'

interface AnimatedStarButtonProps {
    text: string
    href?: string
}

export default function AnimatedStarButton({ text, href = '#' }: AnimatedStarButtonProps) {
    return (
        <a
            href={href}
            className="relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r font-medium text-sm transition-all duration-300 dark:hover:text-white hover:text-black"
        >
            {/* Efecto de brillo */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent -translate-x-full transition-transform duration-700" />

            {/* Estrellas animadas alrededor del botón */}
            {/* Top estrellas */}
            <span className="absolute -top-3 left-[10%] text-yellow-300 text-lg animate-twinkle" style={{ animationDelay: '0s' }}>✦</span>

            <span className="absolute -top-3 right-[20%] text-yellow-400 text-base animate-twinkle" style={{ animationDelay: '1s' }}>✦</span>

            {/* Right estrellas */}
            <span className="absolute top-[20%] -right-4 text-amber-400 text-lg animate-twinkle" style={{ animationDelay: '1.5s' }}>✦</span>

            {/* Bottom estrellas */}
            <span className="absolute -bottom-3 right-[15%] text-amber-300 text-base animate-twinkle" style={{ animationDelay: '2.5s' }}>✦</span>

            <span className="absolute -bottom-3 left-[15%] text-amber-400 text-sm animate-twinkle z-40" style={{ animationDelay: '1.3s' }}>✦</span>

            {/* Left estrellas */}

            <p className="relative z-10 whitespace-nowrap">
                {text}
            </p>
            <SquareArrowOutUpRight size={16} className="relative z-10 transition-transform" />

            <style>{`
        @keyframes twinkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1) rotate(180deg);
          }
        }
        
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
      `}</style>
        </a>
    )
}
