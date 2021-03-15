import React, { useEffect, useState } from 'react'

import { fromRGB } from 'everycolor'

export const UserInfo: React.VFC<{ color: string }> = (props) => {
  const hex2rgb = (hex: string) => {
    if (hex.slice(0, 1) == '#') hex = hex.slice(1)
    if (hex.length == 3)
      hex =
        hex.slice(0, 1) +
        hex.slice(0, 1) +
        hex.slice(1, 2) +
        hex.slice(1, 2) +
        hex.slice(2, 3) +
        hex.slice(2, 3)

    return [hex.slice(0, 2), hex.slice(2, 4), hex.slice(4, 6)].map((str) => {
      return parseInt(str, 16)
    })
  }
  const [userName, setUserName] = useState<string>('')

  useEffect(() => {
    if (!props.color) return

    const hex = hex2rgb(props.color)
    setUserName(fromRGB(hex[0], hex[1], hex[2]))
  }, [props.color])

  const style = {
    color: props.color
  }

  return (
    <div className="mx-4">
      {userName && (
        <p className="break-words" style={style}>
          {props.color} / {userName}
        </p>
      )}
    </div>
  )
}
