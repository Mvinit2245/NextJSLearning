import React from 'react'


export default function page({ params }) {
  return (
    <>

    <main>
      <h1> This is the course details Page</h1>
    </main>
    <main>
      <h2>  <h1>You have selected the Course No {params.course_slug}</h1> </h2>
    </main>

    </>
  )
}
