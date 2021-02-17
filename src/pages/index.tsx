import React, { useEffect } from 'react'
import seedColor from 'seed-color'
import FingerprintJS from '@fingerprintjs/fingerprintjs'

const Home = () => {
  useEffect(() => {
    ;(async () => {
      const fp = await FingerprintJS.load()

      const result = await fp.get()

      console.log(result.visitorId)

      console.log(seedColor(result.visitorId).toHex())
    })()
  }, [])
  return (
    <>
      <p>test</p>
    </>
  )
}

export default Home
