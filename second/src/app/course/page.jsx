import React from 'react'
import image from "@/images/simple.png"
import Image from 'next/image';
import Link from 'next/link';
export default function CoursePage() {
  return (
    <>
    <main>
      <h1> Course Page</h1> 
    </main>

    <main>
      <ul>
        <li>
            <Link href={`/course/course-details/course-1`} >Course 1 </Link>
            </li>
        <li>
            <Link href={`/course/course-details/course-2`}>Course 2 </Link>
            </li>
        <li>
            <Link href={`/course/course-details/course-3`}>Course 3 </Link>
            </li>
        <li>
            <Link href={`/course/course-details/course-4`}>Course 4 </Link>
            </li>
        <li>
            <Link href={`/course/course-details/course-5`}>Course 5 </Link>
            </li>
      </ul>
      {/* <div style={{
        width:500,
        height:600,
        position:"relative"
      }}>
      <Image alt='shop image' width={400} height={400} src={image.src}/>
      </div> */}
      {/* <img src={image.src}/> */}
    </main>
    </>
  )
}
