import React from 'react'
import image from "@/images/simple.png"
import Image from 'next/image';
export default function CoursePage() {
  return (
    <main>
      <h1> Course Page</h1> 
      <div style={{
        width:500,
        height:600,
        position:"relative"
      }}>
      <Image width={400} height={400} src={image.src}/>
      </div>
      {/* <img src={image.src}/> */}
    </main>
  )
}
