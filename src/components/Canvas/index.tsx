import React, { useEffect, useState, useRef } from 'react'
import domtoimage from 'dom-to-image'
import { Circle } from '../Circle'
import classes from './Canvas.module.css'

export const Canvas: React.VFC<{ colors: string[][] }> = (props) => {
  const [colors, setColors] = useState<string[][]>([])
  const wrapperRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    setColors(props.colors)
  }, [props.colors])

  useEffect(() => {
    if (!colors.length) return
    const wrapperElement = wrapperRef.current
    if (!wrapperElement) return
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

    const df = document.createElement('div')
    df.style.height = '640px'
    df.style.width = '640px'
    df.style.position = 'relative'

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
        df.append(c)
      })
    })

    domtoimage
      .toPng(df, { width: 640, height: 640 })
      .then(function (dataUrl) {
        const img = new Image()
        img.src = dataUrl
        img.style.width = '100%'
        img.alt = `${new Date()}`
        sr.append(img)
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error)
      })
  }, [colors])

  return (
    <>
      <div
        className={`relative mx-auto p-1 bg-white grid items-center justify-center overflow-hidden ${classes.wrap}`}
        ref={wrapperRef}
      >
        {!colors.length && <Circle />}
      </div>
    </>
  )
}
