import React, { useState, useEffect } from 'react'

import seedColor from 'seed-color'
import FingerprintJS from '@fingerprintjs/fingerprintjs'
import User from '../components/User'
import Canvas from '../components/Canvas'

const Home = () => {
  const [userColor, setUserColor] = useState<string>('')
  useEffect(() => {
    ;(async () => {
      const result = await FingerprintJS.load().then((fp) => fp.get())

      setUserColor(seedColor(result.visitorId).toHex())
    })()
  }, [])

  if (!userColor) {
    return null
  }
  return (
    <>
      <User color={userColor} />
      <div>
        <Canvas />
      </div>
    </>
  )
}

export default Home
