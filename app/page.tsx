const programmingLanguages = [
  { id: 1, name: "go", year: 1 },
  { id: 2, name: "JavaScript", year: 2 },
  { id: 3, name: "C#", year: 20 },
];
const skills = [
  { id: 1, name: "Git", year: 1 },
  { id: 2, name: "Postman", year: 2 },
  { id: 2, name: "Scrum", year: 2 },
  { id: 2, name: "Vs Code", year: 2 },
  // { id: 3, name: "C++", year: 20 },
];
const database = [
  { id: 1, name: "Postgres" },
  { id: 2, name: "MySql" },
  { id: 3, name: "Sql Server" },
  { id: 4, name: "Redis" },
];
const frameworks = [
  { id: 1, name: "Prisma", year: 1 },
  { id: 2, name: "Express", year: 2 },
  { id: 7, name: "React", year: 2 },
  { id: 6, name: "Nextjs", year: 2 },
  { id: 3, name: "Gorm", year: 20 },
  { id: 4, name: "GoFiber", year: 20 },
  { id: 5, name: "Gorm", year: 20 },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center py-24 min-h-screen">
      <h1 className="text-9xl mb-12">Kronborg</h1>
      <div className="grid auto-rows-fr grid-cols-3 gap-4">
        {/* Programming Languages */}
        <div className="bg-gray-950 rounded-md overflow-hidden border-2 border-gray-700">
          <h2 className="text-lg font-semibold mb-2 p-4 bg-gray-800 rounded-t-md">
            programming Languages
          </h2>
          <div className="grid grid-cols-2 gap-4 p-4">
            {programmingLanguages.map((data) => (
              <div
                key={data.id}
                className="bg-blue-800 border border-gray-700 text-center p-3 rounded-md"
              >
                <p>{data.name}</p>
              </div>
            ))}
            {/* Add more programming languages as needed */}
          </div>
        </div>

        {/* Skills */}
        <div className="bg-gray-950 rounded-md overflow-hidden border-2 border-gray-700">
          <h2 className="text-lg font-semibold mb-2 p-4 bg-gray-800 rounded-t-md">
            Skills
          </h2>
          <div className="grid grid-cols-2 gap-4 p-4">
            {skills.map((data) => (
              <div
                key={data.id}
                className="bg-green-800 border border-gray-700 text-center p-3 rounded-md"
              >
                <p>{data.name}</p>
              </div>
            ))}
            {/* Add more skills as needed */}
          </div>
        </div>

        {/* Frameworks */}
        <div className="bg-gray-950 rounded-md overflow-hidden border-2 border-gray-700">
          <h2 className="text-lg font-semibold mb-2 p-4 bg-gray-800 rounded-t-md">
            Frameworks
          </h2>
          <div className="grid grid-cols-2 gap-4 p-4">
            {frameworks.map((data) => (
              <div
                key={data.id}
                className="bg-red-800 border border-gray-700 p-3 text-center rounded-md"
              >
                <p>{data.name}</p>
              </div>
            ))}
            {/* Add more frameworks as needed */}
          </div>
        </div>
      </div>
    </main>
  );
}
