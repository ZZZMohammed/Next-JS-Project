
import UnluckyNumber from '@/lib/Unluckynbr';
import React from 'react'

export default function Random() {

        const randNbr = Math.floor(Math.random() * 5) ;

        if (randNbr <= 2) {
            throw new UnluckyNumber ('Unlocky Number')  
        }

  return (
        <main>
            {randNbr}
        </main>
  )
}
