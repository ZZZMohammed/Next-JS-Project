
import React from 'react'

export default function helloName({params}) {
  return (
    <div>
        <h1>hello {params.name}</h1>
    </div>
  )
}
