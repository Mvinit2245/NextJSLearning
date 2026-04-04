
import React from 'react';

export default async function Page({ params }) {
  const { course_slug } = await params;

  return (
    <>
    <main>
      <h1>This is the course details Page</h1>
      </main>
      <main>
      <h2>You have selected the Course No {course_slug}</h2>
    </main>

    </>
  );
}
