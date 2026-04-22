async function getCourse(id) {
  const res = await fetch("http://localhost:3000/api/courses");
  const data = await res.json();
  return data.find((c) => c.id == id);
}

export default async function CourseDetail({ params }) {
  const course = await getCourse(params.id);

  if (!course) return <p>Course not found</p>;

  return (
    <div>
      <h1>{course.title}</h1>
      <p>Level: {course.level}</p>
    </div>
  );
}
