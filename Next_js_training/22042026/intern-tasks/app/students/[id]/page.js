import Link from "next/link";

const students = [
  { id: 1, name: "Deekshith" },
  { id: 2, name: "Farhan" },
  { id: 3, name: "Shamanth" },
];

export default function StudentDetail({ params }) {
  const student = students.find((s) => s.id == params.id);

  if (!student) return <p>Student not found</p>;

  return (
    <div>
      <h1>{student.name}</h1>
      <p>ID: {student.id}</p>
      <Link href="/students">⬅ Back</Link>
    </div>
  );
}
