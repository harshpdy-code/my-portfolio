import type React from "react"
import type { ReactNode } from "react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  id?: string
  delay?: number
}

export function AnimatedSection({ children, className = "", id, delay = 0 }: AnimatedSectionProps) {
  const { isVisible, elementRef } = useScrollAnimation(0.1)

  return (
    <section
      ref={elementRef as React.RefObject<HTMLElement>}
      id={id}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </section>
  )
}
