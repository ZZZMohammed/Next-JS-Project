
'use client' ;
import { useState } from 'react';
import '../styles/globals.css'
import { Switch } from "@/components/ui/switch"

export default function UserLayout({ children }) {

  const [field , setfield] = useState(true) ;
  return (
  
     <>
     
     <label>Switch the Mode </label>
     <Switch
        checked={field}
        onCheckedChange={setfield}

            />


 <hr />
 {children}
     
     </>
      ) ;
}
