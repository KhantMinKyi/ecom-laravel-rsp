import { Link } from '@inertiajs/react'
import React from 'react'

export default function about() {
  return (
    <div>about

      <Link prefetch href={route('home')}>Home</Link>
      <Link prefetch href={route('about')}>About</Link>
    </div>
  )
}
