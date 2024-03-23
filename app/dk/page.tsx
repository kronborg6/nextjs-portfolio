"use server";
import { Suspense } from "react";

async function getData(id: number) {
  const res = await fetch(`https://kronborgapi.com/skills/type/${id}`, {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("faild to fetch");
  }
  return res.json();
}

export default async function Home() {
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
            Programming Languages
          </h2>
          <Suspense fallback={<p>Loading feed...</p>}>
            <ProgrammingLanguages />
          </Suspense>
        </div>

        {/* Skills */}
        <div className="bg-gray-950 rounded-md overflow-hidden border-2 border-gray-700">
          <h2 className="text-lg font-semibold mb-2 p-4 bg-gray-800 rounded-t-md">
            Skills
          </h2>
          <Suspense fallback={<p>Loading feed...</p>}>
            <Skills />
          </Suspense>
        </div>

        {/* Frameworks */}
        <div className="bg-gray-950 rounded-md overflow-hidden border-2 border-gray-700">
          <h2 className="text-lg font-semibold mb-2 p-4 bg-gray-800 rounded-t-md">
            Frameworks
          </h2>
          <Suspense fallback={<p>Loading feed...</p>}>
            <Frameowrks />
          </Suspense>
        </div>

        {/* Frameworks */}
        <div className="bg-gray-950 rounded-md overflow-hidden border-2 border-gray-700">
          <h2 className="text-lg font-semibold mb-2 p-4 bg-gray-800 rounded-t-md">
            Databases
          </h2>
          <Suspense fallback={<p>Loading feed...</p>}>
            <Databases />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
async function ProgrammingLanguages() {
  const programmingLanguages = await getData(1);
  return (
    <div className="flex flex-wrap gap-2 m-3">
      {programmingLanguages.map((data: any) => (
        <a key={data.id} href={data.link} target="_blank">
          <div className="bg-blue-800 border border-gray-700 text-center p-3 rounded-md">
            <p>{data.name}</p>
          </div>
        </a>
      ))}
      {/* Add more programming languages as needed */}
    </div>
  );
}
async function Skills() {
  const skills = await getData(2);
  return (
    <div className="flex flex-wrap gap-2 m-3">
      {skills.map((data: any) => (
        <a key={data.id} href={data.link} target="_blank">
          <div className="bg-red-800 border border-gray-700 p-3 text-center rounded-md">
            <p>{data.name}</p>
          </div>
        </a>
      ))}
      {/* Add more frameworks as needed */}
    </div>
  );
}
async function Frameowrks() {
  const frameworks = await getData(3);
  return (
    <div className="flex flex-wrap gap-2 m-3">
      {frameworks.map((data: any) => (
        <a key={data.id} href={data.link} target="_blank">
          <div className="bg-orange-800 border border-gray-700 p-3 text-center rounded-md">
            <p>{data.name}</p>
          </div>
        </a>
      ))}
      {/* Add more frameworks as needed */}
    </div>
  );
}
async function Databases() {
  const database = await getData(4);
  return (
    <div className="flex flex-wrap gap-2 m-3">
      {database.map((data: any) => (
        <a key={data.id} href={data.link} target="_blank">
          <div className="bg-orange-800 border border-gray-700 p-3 text-center rounded-md">
            <p>{data.name}</p>
          </div>
        </a>
      ))}
      {/* Add more frameworks as needed */}
    </div>
  );
}
