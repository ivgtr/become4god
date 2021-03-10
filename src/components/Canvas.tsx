import React from 'react'

const Canvas = () => {
  const arr: string[] = []
  for (let i = 0; i < 128; i++) {
    arr.push('#455A64')
  }

  return (
    <>
      <div className="w-96 h-96">
        {arr.map((_, index) => {
          return (
            <tr key={index}>
              {arr.map((item, i) => {
                const style = {
                  background: item
                }
                return <td key={`d${i}`} style={style} className="inline-block c"></td>
              })}
            </tr>
          )
        })}
      </div>
    </>
  )
}

export default Canvas
