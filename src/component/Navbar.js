
import Link from 'next/link'
import React from 'react'

export default function navbar() {
  return (
    <div>
      <nav>
        <ul>
            <li><Link href='/home'>home</Link></li>
             <li><Link href='/about'>about</Link></li>
              <li><Link href='/blog/1'>blog 1</Link></li>
               <li><Link href='/blog/100'>blog 100</Link></li>
        </ul>
      </nav>
    </div>
  )
}
