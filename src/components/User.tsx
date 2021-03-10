import React, { useEffect, useState } from 'react'

import seedColor from 'seed-color'
import FingerprintJS from '@fingerprintjs/fingerprintjs'

const User = () => {
  const [color, setColor] = useState<string>('')
  const x = Math.floor(Math.random() * 256)
  const y = Math.floor(Math.random() * 256)

  useEffect(() => {
    ;(async () => {
      const fp = await FingerprintJS.load()

      const result = await fp.get()

      setColor(seedColor(result.visitorId).toHex())
    })()
  }, [])

  const style = {
    color
  }
  return (
    <>
      <p style={style}>{`(x:${x}, y:${y})`}</p>
    </>
  )
}

export default User
