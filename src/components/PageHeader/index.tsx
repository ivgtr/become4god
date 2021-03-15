import React from 'react'
import Link from 'next/link'

export const PageHeader = () => {
  return (
    <>
      <header className="text-center">
        <h1 className="text-bold text-3xl">
          <Link href="/">
            <a className="inline-block m-6">kamisama</a>
          </Link>
        </h1>
      </header>
    </>
  )
}
