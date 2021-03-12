import React, { useEffect, useState, useRef } from 'react'
// import classes from './Canvas.module.css'

export const Canvas = () => {
  const [arr, setArr] = useState<string[][]>([])
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  // const maxColorValue = 8

  useEffect(() => {
    const _arr: string[][] = [
      ['#455A64', '#455A64', '#455A64', '#455A64', '#455A64', '#455A64', '#455A64', '#455A64'],
      ['#455A64', '#455A64', '#455A64', '#455A64', '#455A64', '#455A64', '#455A64', '#455A64'],
      ['#455A64', '#455A64', '#455A64', '#455A64', '#455A64', '#455A64', '#455A64', '#455A64'],
      ['#455A64', '#455A64', '#455A64', '#455A64', '#455A64', '#455A64', '#455A64', '#455A64'],
      ['#455A64', '#455A64', '#455A64', '#455A64', '#455A64', '#455A64', '#455A64', '#455A64'],
      ['#455A64', '#455A64', '#455A64', '#455A64', '#455A64', '#455A64', '#455A64', '#455A64'],
      ['#455A64', '#455A64', '#455A64', '#455A64', '#455A64', '#455A64', '#455A64', '#455A64'],
      ['#455A64', '#455A64', '#455A64', '#455A64', '#455A64', '#455A64', '#455A64', '#455A64']
    ]
    setArr(_arr)
    console.log(arr)

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

    const s = 10

    const df = document.createDocumentFragment()
    const spacer = document.createElement('div')
    spacer.style.width = `${_arr.length * s}px`
    spacer.style.height = `${_arr.length * s}px`
    df.append(spacer)

    const cell = document.createElement('div')
    cell.style.position = 'absolute'
    cell.style.left = '0'
    cell.style.top = '0'
    cell.style.width = `${s - 1}px`
    cell.style.height = `${s - 1}px`
    cell.style.fontSize = '0.8rem'
    cell.style.wordBreak = 'break-all'
    cell.style.overflow = 'hidden'
    cell.style.whiteSpace = 'pre-wrap'
    // @ts-expect-error
    cell.style.contain = 'size layout paint'

    for (let i = 0; i < 4; i++) {
      const c = cell.cloneNode(false)
      df.append(c)
    }
    sr.append(df)
  }, [])

  return (
    <>
      <div ref={wrapperRef} />
    </>
  )
}
