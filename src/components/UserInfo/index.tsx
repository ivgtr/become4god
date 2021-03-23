import React, { useEffect, useState } from 'react'

import { fromRGB } from 'everycolor'
import seedColor from 'seed-color'
import { CopyToClipboard } from 'react-copy-to-clipboard'

export const UserInfo: React.VFC<{ uid: string }> = (props) => {
  const [color, setColor] = useState<string>('')
  const [userName, setUserName] = useState<string>('')

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
    <div className="max-w-3xl mt-8 mx-auto text-left">
      {userName && (
        <p className="break-words">
          Your color is{' '}
          <CopyToClipboard text={color}>
            <span className="font-bold cursor-pointer" style={style}>
              {userName}
            </span>
          </CopyToClipboard>
          .
        </p>
      )}
    </div>
  )
}
