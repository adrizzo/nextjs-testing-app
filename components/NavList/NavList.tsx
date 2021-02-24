import React from 'react'
import Link from 'next/link'

function NavList() {
  return (
  <ul>
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
  </ul>
  )
}

export default NavList
