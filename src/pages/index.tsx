import React, { useEffect, useState } from 'react'
import seedColor from 'seed-color'
import FingerprintJS from '@fingerprintjs/fingerprintjs'

const Home = () => {
  const [color, setColor] = useState<string>('')

  useEffect(() => {
    ;(async () => {
      const fp = await FingerprintJS.load()

      const result = await fp.get()

      setColor(seedColor(result.visitorId).toHex())
    })()
  }, [])
  return (
    <>
      <p>{color}</p>
    </>
  )
}

export default Home
