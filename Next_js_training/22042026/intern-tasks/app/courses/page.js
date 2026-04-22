"use client";
import Link from "next/link";

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetch("/api/courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  const filtered =
    filter === "All"
      ? courses
      : courses.filter((c) => c.level === filter);

  return (
    <div>
      <h1>Courses</h1>

      <select onChange={(e) => setFilter(e.target.value)}>
        <option>All</option>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
      </select>

      {filtered.map((c) => (
        <div key={c.id}>
          <Link href={`/courses/${c.id}`}>
            {c.title} - {c.level}
          </Link>
        </div>
      ))}
    </div>
  );
}