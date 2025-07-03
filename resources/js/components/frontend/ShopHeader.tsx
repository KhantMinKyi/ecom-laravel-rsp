
import { Link } from '@inertiajs/react'
import React from 'react'

export default function ShopHeader() {
  return (
    <header className='flex gap-2'>
      <Link href={route('home')}>Home</Link>
      <Link href={route('login')}>Login</Link>
    </header>
  )
}
