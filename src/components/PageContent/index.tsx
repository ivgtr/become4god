import React, { useState, useEffect } from 'react'
import axios from 'axios'
import seedColor from 'seed-color'
import { parseCookies } from 'nookies'

import { UserInfo } from '../UserInfo'
import { Canvas } from '../Canvas'
import { Container } from '../Container'

const wdrftgylp = 'くぁwせdrftgyふじこlp'

export const PageContent = () => {
  const [userColor, setUserColor] = useState<string>('')
  const [colors, setColors] = useState<string[][]>([])
  useEffect(() => {
    const cookies = parseCookies() as { wdrftgylp: string }
    setUserColor(seedColor(cookies.wdrftgylp).toHex())
  }, [])

  useEffect(() => {
    ;(async () => {
      if (userColor) {
        const body = {
          wdrftgylp: encodeURI(wdrftgylp)
        }

        const data = await axios
          .post('', { body })
          .then((response) => response.data)
          .then((result) => {
            return result
          })
        console.log(data)
        setColors([['#aaa']])
      }
    })()
  }, [userColor])

  return (
    <Container>
      {userColor && (
        <>
          <UserInfo color={userColor} />
          <main>{colors.length > 0 && <Canvas />}</main>
        </>
      )}
    </Container>
  )
}
