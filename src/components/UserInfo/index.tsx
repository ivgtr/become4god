import React, { useEffect, useState } from 'react'

import { fromRGB } from 'everycolor'
import seedColor from 'seed-color'

export const UserInfo: React.VFC<{ uid: string }> = (props) => {
  const [color, setColor] = useState<string>('')
  const [userName, setUserName] = useState<string>('')

  const clipbord = () => {}

  useEffect(() => {
    setColor(seedColor(props.uid).toHex())
  }, [])

  useEffect(() => {
    if (!color) return

    const hex = seedColor(props.uid).toRGB()
    setUserName(fromRGB(hex.r, hex.g, hex.b))
  }, [color])

  const style = {
    color
  }

  return (
    <div className="mx-4 text-center">
      {userName && (
        <p className="break-words" onClick={clipbord} style={style}>
          {userName}
        </p>
      )}
    </div>
  )
}
