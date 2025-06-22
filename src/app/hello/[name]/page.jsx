
import React from 'react'

export default function helloName({params , searchParams}) {
  console.log(params , searchParams);
  
  return (
    <div>
        <h1>hello {params.name}</h1>
    </div>
  )
}
