import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-9xl mb-24">Kronborg</h1>
        <div className="border-solid rounded-md border-2 border-gray-500 bg-gray-700 px-96 p-20 mx-4">
          <h1>Sporg</h1>
        </div>
        <div className="border-solid rounded-md border-2 border-gray-500 bg-gray-700 px-96 p-20 m-10">
          <h1>Skills</h1>
        </div>
        <div className="border-solid rounded-md border-2 border-gray-500 bg-gray-700 px-96 p-20">
          <h1>Fremworks</h1>
        </div>
      </div>
    </main>
  );
}
