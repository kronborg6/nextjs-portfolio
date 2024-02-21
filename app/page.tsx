const programmingLanguages = [
  { id: 1, name: "go", year: 1 },
  { id: 2, name: "Rust", year: 2 },
  { id: 3, name: "C++", year: 20 },
];
const skills = [
  { id: 1, name: "go", year: 1 },
  { id: 2, name: "Rust", year: 2 },
  { id: 3, name: "C++", year: 20 },
];
const frameworks = [
  { id: 1, name: "go", year: 1 },
  { id: 2, name: "Rust", year: 2 },
  { id: 3, name: "C++", year: 20 },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center py-24 min-h-screen">
      <h1 className="text-9xl mb-12">Kronborg</h1>
      <div className="grid auto-rows-fr grid-cols-3 gap-4">
        {/* Programming Languages */}
        <div className="bg-gray-200 rounded-md overflow-hidden border border-gray-500">
          <h2 className="text-lg font-semibold mb-2 p-4 bg-gray-300 rounded-t-md">
            programming Languages
          </h2>
          <div className="grid grid-cols-2 gap-4 p-4">
            {programmingLanguages.map((data) => (
              <div
                key={data.id}
                className="bg-blue-300 border border-gray-400 p-4 rounded-md"
              >
                <p>
                  {data.name} - {data.year} years
                </p>
              </div>
            ))}
            {/* Add more programming languages as needed */}
          </div>
        </div>

        {/* Skills */}
        <div className="bg-gray-200 rounded-md overflow-hidden border border-gray-500">
          <h2 className="text-lg font-semibold mb-2 p-4 bg-gray-300 rounded-t-md">
            Skills
          </h2>
          <div className="grid grid-cols-2 gap-4 p-4">
            {skills.map((data) => (
              <div
                key={data.id}
                className="bg-green-300 border border-gray-400 p-4 rounded-md"
              >
                <p>
                  {data.name} - {data.year} years
                </p>
              </div>
            ))}
            {/* Add more skills as needed */}
          </div>
        </div>

        {/* Frameworks */}
        <div className="bg-gray-200 rounded-md overflow-hidden border border-gray-500">
          <h2 className="text-lg font-semibold mb-2 p-4 bg-gray-300 rounded-t-md">
            Frameworks
          </h2>
          <div className="grid grid-cols-2 gap-4 p-4">
            {frameworks.map((data) => (
              <div
                key={data.id}
                className="bg-red-300 border border-gray-400 p-4 rounded-md"
              >
                <p>
                  {data.name} - {data.year} years
                </p>
              </div>
            ))}
            {/* Add more frameworks as needed */}
          </div>
        </div>
      </div>
    </main>
  );
}
