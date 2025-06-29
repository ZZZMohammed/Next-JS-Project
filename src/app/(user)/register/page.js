
import React, { Suspense } from 'react'



async function Form (){
    const promise = new Promise ((resolve)=> setTimeout ( resolve , 4000)) ;
    await promise ;

  return (
      <h1>wqionfjkoqwenfjwe</h1>
  );
}

export default function register() {


  return (
    <div>
      <Suspense fallback={<div>...loading</div>}>
      <h1>Form  </h1>
      <Form />
      </Suspense>
    </div>
  )
}
