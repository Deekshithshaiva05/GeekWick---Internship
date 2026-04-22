export async function GET() {
  const interns = [
    { id: 1, name: "Deekshith" },
    { id: 2, name: "Farhan" },
  ];

  return Response.json(interns);
}