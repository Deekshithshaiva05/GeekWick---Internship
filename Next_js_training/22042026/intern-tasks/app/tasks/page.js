"use client";
import { useEffect, useState } from "react";

export default function TasksPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks([
      { id: 1, title: "UI Design", status: "Pending" },
      { id: 2, title: "API Integration", status: "Completed" },
      { id: 3, title: "Testing", status: "Pending" },
    ]);
  }, []);

  const grouped = tasks.reduce((acc, task) => {
    acc[task.status] = acc[task.status] || [];
    acc[task.status].push(task);
    return acc;
  }, {});

  return (
    <div>
      <h1>Tasks</h1>
      {Object.keys(grouped).map((status) => (
        <div key={status}>
          <h2>{status}</h2>
          {grouped[status].map((t) => (
            <p key={t.id}>{t.title}</p>
          ))}
        </div>
      ))}
    </div>
  );
}
