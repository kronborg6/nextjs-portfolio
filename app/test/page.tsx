import tags from "../data/tags";
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

// const projects = [
//   {
//     id: 1,
//     title: "SimSvend",
//     dec: "Jeg har lavet det her",
//     tags: [tags[4], tags[11], tags[10]],
//     links: ["", "https://github.com/kronborg6/SimSvendApi", ""],
//   },
//   {
//     id: 2,
//     title: "Sea of Keys",
//     dec: "Jeg har lavet det her",
//     tags: [tags[4], tags[9], tags[7]],
//     links: ["", "https://github.com/orgs/Sea-of-Keys/repositories"],
//   },
// ];

export default function Home() {
  return (
    <main className="flex flex-col items-center py-12 min-h-screen">
      <h1 className="sm:text-3xl md:text-5xl lg:text-7xl mb-12">
        Velkomme til Kronborg<span className="font-bold">Code</span>
      </h1>
      <p>
        jeg er 23 blevet færdiguddannet som datatekniker med speciale i
        programmering
      </p>
      <div className="gap-4 space-y-4 mx-auto max-w-prose mt-4 sm:mt-8">
        {/* Programming Languages */}
        <div className="bg-gray-950 rounded-md overflow-hidden border-2 border-gray-700">
          <h2 className="text-lg font-semibold mb-2 p-4 bg-gray-800 rounded-t-md">
            programming sprog
          </h2>
          <div className="flex flex-wrap gap-2 m-3">
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
          <div className="flex flex-wrap gap-2 m-3">
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
          <div className="flex flex-wrap gap-2 m-3">
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

        {/* Frameworks */}
        <div className="bg-gray-950 rounded-md overflow-hidden border-2 border-gray-700">
          <h2 className="text-lg font-semibold mb-2 p-4 bg-gray-800 rounded-t-md">
            Databases
          </h2>
          <div className="flex flex-wrap gap-2 m-3">
            {database.map((data) => (
              <div
                key={data.id}
                className="bg-orange-800 border border-gray-700 p-3 text-center rounded-md"
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
