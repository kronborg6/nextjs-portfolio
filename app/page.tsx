async function getData() {
  const res = await fetch("http://localhost:8000/projects", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function Page() {
  const projects = await getData();

  // console.log(projects);
  // return <div>Kronborg</div>;
  return (
    <div className="flex flex-1 flex-col pt-12 min-h-screen">
      <div className="flex-1 gap-8 p-4 transition-[padding] sm:p-8">
        <div className="mx-auto h-full max-w-6xl">
          <div className="mx-auto mb-4 max-w-prose text-center">
            <h1 className="text-4xl font-bold text-white mb-2">Projects</h1>
            <p>Here are some of the projects I have made.</p>
          </div>
          <div className="grid auto-rows-fr grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {projects.map((data: any) => (
              <div
                key={data.id}
                className="relative overflow-clip rounded-md border-2 border-gray-500 transition-transform ease-linear before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-card-gradient before:transition-[background-position] before:duration-300 before:ease-in-out before:content-[''] hover:border-gray-950 hover:before:bg-card-gradient-hover sm:hover:scale-[1.025]"
              >
                <div className="z-20 flex h-full w-full flex-col transition-[background-position] duration-300 ease-in-out">
                  <div className="flex-1">
                    <div className="rounded-md bg-chip bg-opacity-70 px-3 py-2">
                      <div className="bg-gray-800 rounded-lg mb-10">
                        <span className="block text-center text-xl font-bold">
                          {data.name}
                        </span>
                        <div>
                          <br />
                          <p className="mx-2">{data.description}</p>
                        </div>
                      </div>
                      <div className="flex gap-2 flex-wrap h-32">
                        <div className="flex w-full flex-1 flex-wrap items-end gap-4">
                          {/*
                           */}
                          {data.skills.map((tag: any) => (
                            <a key={tag.id} href={tag.link} target="_blank">
                              <span className="bg-gray-900 px-2 py-1 rounded-md">
                                {tag.name}
                              </span>
                            </a>
                          ))}
                        </div>
                        <div className="flex h-full w-fit items-end justify-end">
                          <div className="darken-bg flex flex-col items-end space-y-1 rounded-full bg-chip bg-opacity-70 p-1">
                            {data.website ? (
                              <a href={data.website} target="_blank">
                                <span className="inline-block whitespace-nowrap transition-colors items-end text-white hover:text-black">
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    height="20"
                                    width="20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5z"></path>
                                  </svg>
                                </span>
                              </a>
                            ) : null}
                            {data.github ? (
                              <a
                                target="_blank"
                                aria-label="GitHub"
                                className="inline-block whitespace-nowrap transition-colors text-white hover:text-black"
                                href={data.github}
                              >
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  role="img"
                                  viewBox="0 0 24 24"
                                  height="20"
                                  width="20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                                </svg>
                              </a>
                            ) : null}
                            {data.download ? (
                              <a
                                aria-label="DangerousTool"
                                href={data.download}
                                className="inline-block whitespace-nowrap transition-colors text-white hover:text-black"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                  height="20"
                                  width="20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </a>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
