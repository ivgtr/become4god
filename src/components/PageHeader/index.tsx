import React from 'react'

import classes from './PageHeader.module.css'

export const PageHeader = () => {
  return (
    <>
      <header className="text-center">
        <h1 className="inline-block my-12">
          <span className={`font-black text-4xl ${classes.title}`}>No titlé</span>
        </h1>
      </header>
    </>
  )
}
