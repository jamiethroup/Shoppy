import { useState, useEffect, useRef } from 'react'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
const d = new Date();
let hour = d.getHours();

export default function WelcomeMessage() {
  const [isClient, setIsClient] = useState(false)
  const nameRef = useRef<string | null>(null);

  useEffect(() => {
    setIsClient(true)
    if (typeof window !== 'undefined') {
      let name = localStorage.getItem('name');
      if (!name) {
        name = prompt('Please enter your name:');
        localStorage.setItem('name', name || '');
      }
      nameRef.current = name;
    }
  }, [])

  const d = new Date();
  let hour = d.getHours();

  return (
    <>
    <div className="container px-4 text-sm">
      <h2 className={inter.className}>
        Hey, {isClient ? nameRef.current || '' : ''}<br />
        {hour > 12 && hour < 18 ? 'Good Afternoon' : hour > 18 ? 'Good Evening' : 'Good Morning'}, 
      </h2>
    </div>
    </>
  )
}