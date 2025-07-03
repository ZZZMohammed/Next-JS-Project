
"use client"
import React from 'react'

export default function Erroe({error , reset}) {

        

  return (
    <>
       <h1>{error.name}</h1>
       <button onClick={reset}>
            Retry
       </button>
    </>
  )
}
