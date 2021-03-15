import React, { useEffect, useState, useRef } from 'react'
import classes from './Canvas.module.css'

export const Canvas = () => {
  const [colors, setColors] = useState<string[][]>([])
  const wrapperRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const _arr: string[][] = []
    const max = 128
    for (let i = 0; i < max; i++) {
      const narr: string[] = []

      for (let j = 0; j < max; j++) {
        narr.push('#fca')
      }

      _arr.push(narr)
    }
    setColors(_arr)
  }, [])

  useEffect(() => {
    const wrapperElement = wrapperRef.current
    if (!wrapperElement) {
      return
    }
    const sr =
      wrapperElement.shadowRoot ||
      wrapperElement.attachShadow({
        mode: 'open'
      })
    while (sr.firstChild) {
      sr.firstChild.remove()
    }

    const maxColorValue = colors.length
    const size = 100 / maxColorValue

    const df = document.createDocumentFragment()
    const spacer = document.createElement('div')
    spacer.style.width = '100%'
    spacer.style.height = '100%'
    spacer.style.margin = '0 auto'
    spacer.style.position = 'relative'
    df.append(spacer)

    const cell = document.createElement('div')
    cell.style.position = 'absolute'
    cell.style.left = '0'
    cell.style.top = '0'
    cell.style.width = `${size * 0.9}%`
    cell.style.height = `${size * 0.9}%`
    cell.style.overflow = 'hidden'
    // @ts-expect-error
    cell.style.contain = 'size layout paint'

    colors.map((item, index) => {
      cell.style.top = `${size * index}%`

      item.map((color, index) => {
        cell.style.left = `${size * index}%`
        cell.style.backgroundColor = color
        const c = cell.cloneNode(false)
        spacer.append(c)
      })
    })
    sr.append(df)
  }, [colors])

  return (
    <>
      <div className={`my-8 mx-auto ${classes.wrap}`} ref={wrapperRef} />
    </>
  )
}
