import { useEffect, useState } from 'react'

export default function useScroll(height: number) {
  const [scrollBoolean, setScrollBoolean] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
     
      setTimeout(() => {
        if (window.scrollY > height) {
          setScrollBoolean(true)
        } else {
          setScrollBoolean(false)
        }
      }, 700) 
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [height])

  return { scrollBoolean }
}
