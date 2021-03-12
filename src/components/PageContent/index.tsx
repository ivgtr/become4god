import React, { useState, useEffect } from 'react'

import seedColor from 'seed-color'
import FingerprintJS from '@fingerprintjs/fingerprintjs'

import { UserInfo } from '../UserInfo'
import { Canvas } from '../Canvas'
import { Container } from '../Container'

export const PageContent = () => {
  const [userColor, setUserColor] = useState<string>('#087da1')
  useEffect(() => {
    ;(async () => {
      const result = await FingerprintJS.load().then((fp) => fp.get())

      setUserColor(seedColor(result.visitorId).toHex())
    })()
  }, [])

  return (
    <Container>
      <UserInfo color={userColor} />
      <main>
        <Canvas />
      </main>
    </Container>
  )
}
