const programmingLanguages = ["go", "rust", "javascript", "typescript"];
const skills = ["git", "scrum"];
const fremeworks = ["react", "fiber", "gorm", "nextjs"];
export default function Home({ programmingLanguages, skills, fremeworks }) {
  return (
    <main className="flex flex-col items-center justify-center p-24">
      <h1 className="text-9xl mb-12">Kronborg</h1>
      <div className="flex flex-col space-y-8">
        {/* Programming Languages */}
        <div className="bg-gray-200 rounded-md overflow-hidden border border-gray-500">
          {programmingLanguages.map((language, index) => (
            <h2
              key={index}
              className="text-lg font-semibold mb-2 p-4 bg-gray-300 rounded-t-md"
            >
              {language}
            </h2>
          ))}
          <div className="grid grid-cols-2 gap-4 p-4">
            <div className="bg-blue-300 border border-gray-400 p-4 rounded-md">
              <p>Rust - 5 years</p>
            </div>
            <div className="bg-blue-300 border border-gray-400 p-4 rounded-md">
              <p>Rust - 4 years</p>
            </div>
            <div className="bg-blue-300 border border-gray-400 p-4 rounded-md">
              <p>JavaScript - 20 years</p>
            </div>
            {/* Add more programming languages as needed */}
          </div>
        </div>

        {/* Skills */}
        <div className="bg-gray-200 rounded-md overflow-hidden border border-gray-500">
          <h2 className="text-lg font-semibold mb-2 p-4 bg-gray-300 rounded-t-md">
            Skills
          </h2>
          <div className="grid grid-cols-2 gap-4 p-4">
            <div className="bg-green-300 border border-gray-400 p-4 rounded-md">
              <p>Skill 1</p>
            </div>
            <div className="bg-green-300 border border-gray-400 p-4 rounded-md">
              <p>Skill 2</p>
            </div>
            <div className="bg-green-300 border border-gray-400 p-4 rounded-md">
              <p>Skill 3</p>
            </div>
            {/* Add more skills as needed */}
          </div>
        </div>

        {/* Frameworks */}
        <div className="bg-gray-200 rounded-md overflow-hidden border border-gray-500">
          <h2 className="text-lg font-semibold mb-2 p-4 bg-gray-300 rounded-t-md">
            Frameworks
          </h2>
          <div className="grid grid-cols-2 gap-4 p-4">
            <div className="bg-red-300 border border-gray-400 p-4 rounded-md">
              <p>Framework 1</p>
            </div>
            <div className="bg-red-300 border border-gray-400 p-4 rounded-md">
              <p>Framework 2</p>
            </div>
            <div className="bg-red-300 border border-gray-400 p-4 rounded-md">
              <p>Framework 3</p>
            </div>
            {/* Add more frameworks as needed */}
          </div>
        </div>
      </div>
    </main>
  );
}
