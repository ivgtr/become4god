import React, { useEffect, useState } from 'react'
import classes from './Canvas.module.css'

export const Canvas = () => {
  const [arr, setArr] = useState<string[]>([])
  useEffect(() => {
    const _arr: string[] = [
      '#455A64',
      '#455A64',
      '#455A64',
      '#455A64',
      '#455A64',
      '#455A64',
      '#455A64',
      '#455A64',
      '#455A64',
      '#455A64',
      '#455A64',
      '#455A64',
      '#455A64',
      '#455A64',
      '#455A64',
      '#455A64'
    ]
    setArr(_arr)
  }, [])

  return (
    <>
      <p className={`text-red-800 ${classes.light}`}>{arr}</p>
    </>
  )
}
