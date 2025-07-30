import type React from "react"
import type { ReactNode } from "react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

interface StaggeredContainerProps {
  children: ReactNode[]
  className?: string
  staggerDelay?: number
}

export function StaggeredContainer({ children, className = "", staggerDelay = 100 }: StaggeredContainerProps) {
  const { isVisible, elementRef } = useScrollAnimation(0.1)

  return (
    <div ref={elementRef as React.RefObject<HTMLDivElement>} className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          className={`transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
          }`}
          style={{ transitionDelay: `${index * staggerDelay}ms` }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}
