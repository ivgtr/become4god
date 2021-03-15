import React, { useState, useEffect } from 'react'

import seedColor from 'seed-color'
import uuid from 'uuid-random'

import { UserInfo } from '../UserInfo'
import { Canvas } from '../Canvas'
import { Container } from '../Container'

export const PageContent = () => {
  const [userColor, setUserColor] = useState<string>('')
  useEffect(() => {
    setUserColor(seedColor(uuid()).toHex())
  }, [])

  return (
    <Container>
      {userColor && (
        <>
          <UserInfo color={userColor} />
          <main>
            <Canvas />
          </main>
        </>
      )}
    </Container>
  )
}
