export async function GET() {
  const courses = [
    { id: 1, title: "React", level: "Beginner" },
    { id: 2, title: "Node", level: "Intermediate" },
    { id: 3, title: "AI", level: "Advanced" },
  ];

  return Response.json(courses);
}
