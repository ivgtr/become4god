import React, { useEffect, useState } from 'react'
import { setCookie, parseCookies } from 'nookies'
import uuid from 'uuid-random'

import { PageHeader } from '../components/PageHeader'
import { PageContent } from '../components/PageContent'

export default function Home() {
  const [load, isLoaded] = useState<boolean>(false)
  useEffect(() => {
    const cookies = parseCookies() as { wdrftgylp: string }
    if (cookies.wdrftgylp) {
      console.log(cookies.wdrftgylp)
    } else {
      const aid = uuid()
      setCookie(null, 'wdrftgylp', aid, {
        maxAge: 60 * 60 * 12,
        path: '/'
      })
    }
    isLoaded(true)
  }, [])
  return (
    <>
      {load && (
        <>
          <PageHeader />
          <PageContent />
        </>
      )}
    </>
  )
}
