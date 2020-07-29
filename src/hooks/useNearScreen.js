import { useEffect, useState, useRef } from 'react'

function useNearScreen() {
  const [show, setShow] = useState(false)
  const ref = useRef(null)

  useEffect(function () {
    const intersectionObserverImport = async () => {
      typeof window.IntersectionObserver !== 'undefined'
        ? ''
        : await import('intersection-observer')

      const observer = new window.IntersectionObserver(function (entries) {
        const { isIntersecting } = entries[0]

        if (isIntersecting) {
          setShow(true)
          // This stop stops the follow of intersection observer to the element once is true
          observer.disconnect()
        }
      })
      observer.observe(ref.current)
    }
    intersectionObserverImport()
  })

  return [show, ref]
}

export default useNearScreen
