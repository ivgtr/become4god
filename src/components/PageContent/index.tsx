import React, { useState, useEffect } from 'react'
import axios from 'axios'
import seedColor from 'seed-color'
import { setCookie, parseCookies } from 'nookies'
import uuid from 'uuid-random'

import { UserInfo } from '../UserInfo'
import { Canvas } from '../Canvas'
import { Container } from '../Container'

export const PageContent = () => {
  const [userId, setUserId] = useState<string>('')
  const [colors, setColors] = useState<{ canvas: string[][]; count: number }>({
    canvas: [],
    count: 0
  })
  const cookies = parseCookies() as { wdrftgylp: string }
  const url = process.env.END_POINT as string

  useEffect(() => {
    setUserId(cookies.wdrftgylp || uuid())
  }, [])

  useEffect(() => {
    ;(async () => {
      if (userId) {
        const body = {
          wdrftgylp: cookies.wdrftgylp ? true : false,
          color: seedColor(userId).toHex(),
          x: Math.floor(Math.random() * 128),
          y: Math.floor(Math.random() * 128)
        }

        await axios
          .post(`${url}/canvas`, { body })
          .then((response) => response.data)
          .then((result: { canvas: string[][]; count: number }) => {
            setColors(result)
            setCookie(null, 'wdrftgylp', userId, {
              maxAge: 60 * 60 * 12,
              path: '/'
            })
          })
      }
    })()
  }, [userId])

  return (
    <Container>
      {userId && (
        <>
          <div className="text-center">
            <p>{colors.count} times played.</p>
          </div>
          <UserInfo uid={userId} />
          <main className="my-8">
            <Canvas colors={colors.canvas} />
          </main>
        </>
      )}
    </Container>
  )
}
