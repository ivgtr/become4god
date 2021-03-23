import React, { useState, useEffect } from 'react'
import axios from 'axios'
import seedColor from 'seed-color'
import FingerprintJS from '@fingerprintjs/fingerprintjs'

import { UserInfo } from '../UserInfo'
import { Canvas } from '../Canvas'
import { Description } from '../Description'
import { Container } from '../Container'

export const PageContent = () => {
  const [userColor, setUserColor] = useState<string>('')
  const [colors, setColors] = useState<{ canvas: string[][]; count: number }>({
    canvas: [],
    count: 0
  })
  const url = process.env.END_POINT as string

  useEffect(() => {
    ;(async () => {
      const result = await FingerprintJS.load().then((fp) => fp.get())

      setUserColor(seedColor(result.visitorId).toHex())
    })()
  }, [])

  useEffect(() => {
    ;(async () => {
      if (userColor) {
        const body = {
          color: seedColor(userColor).toHex(),
          x: Math.floor(Math.random() * 128),
          y: Math.floor(Math.random() * 128)
        }

        await axios
          .post(`${url}/canvas`, { body })
          .then((response) => response.data)
          .then((result: { canvas: string[][]; count: number }) => {
            setColors(result)
          })
      }
    })()
  }, [userColor])

  return (
    <Container>
      {userColor && (
        <>
          <UserInfo color={userColor} />
          <main className="my-8">
            <Canvas colors={colors.canvas} />
          </main>
          <div className="text-center">
            <p>
              All users played <span className="font-bold">{colors.count} times</span>
            </p>
          </div>
          <Description />
        </>
      )}
    </Container>
  )
}
