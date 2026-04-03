import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header>
        <div className='logo'>logo</div>
        <ul>
            <li>
                <Link href="/"> Home</Link>
                
            </li>
            <li>
                <Link href='/about'> About</Link>
            </li>
            <li>
                <Link href='/course'> Course</Link>
            </li>
        </ul>
    </header>
  )
}
