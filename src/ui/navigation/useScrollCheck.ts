import { RefObject, useEffect, useState } from "react"

export function useScrollCheck(scrollRef: RefObject<HTMLDivElement>) {
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(false)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const checkScroll = () => {
      const hasScroll = el.scrollWidth > el.clientWidth
      const atStart = el.scrollLeft <= 0
      const atEnd = Math.ceil(el.scrollLeft + el.clientWidth) >= el.scrollWidth

      setShowLeftArrow(hasScroll && !atStart)
      setShowRightArrow(hasScroll && !atEnd)
    }

    checkScroll()

    el.addEventListener("scroll", checkScroll)
    window.addEventListener("resize", checkScroll)

    return () => {
      el.removeEventListener("scroll", checkScroll)
      window.removeEventListener("resize", checkScroll)
    }
  }, [scrollRef])

  return { showLeftArrow, showRightArrow }
}
