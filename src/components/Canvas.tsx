import React, { useEffect, useState } from 'react'

const Canvas = () => {
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
      <div className="grid w-96 h-96">
        {arr.length &&
          arr.map((item, index) => {
            const style = {
              color: item
            }
            return <span style={style} key={index}></span>
          })}
      </div>
    </>
  )
}

export default Canvas
