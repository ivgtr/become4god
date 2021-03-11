import React, { useEffect, useState } from 'react'

import { fromRGB } from 'everycolor'

const User = (props: { color: string }) => {
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
    const hex = hex2rgb(props.color)

    setUserName(fromRGB(hex[0], hex[1], hex[2]))
  }, [])

  const style = {
    color: props.color
  }

  return (
    <>
      <p style={style}>{userName}</p>
    </>
  )
}

export default User
