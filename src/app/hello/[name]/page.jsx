
import { notFound } from 'next/navigation';
import React from 'react'

export default function helloName({params , searchParams}) {

  const {name} = params ;

  if(name === 'eljid') {
      notFound();
  }
  
  
  return (
    <div>
        <h1>hello {name}</h1>
    </div>
  )
}
