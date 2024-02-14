const tags = ["C#", "C++", "JavaScript", "TypeScript", "Golang", "Rust"];
const projects = [
  {
    id: 1,
    title: "Hjemmeside",
    tags: [tags[0], tags[2], tags[4]],
    links: ["https://www.google.com", "https://www.facebook.com"],
  },
];

export default function Project() {
  return (
    <div className="scrollbar flex flex-1 flex-col overflow-y-scroll pt-12">
      <div className="flex-1 gap-8 p-4 transition-[padding] sm:p-8">
        <div className="mx-auto h-full max-w-6xl">
          <div className="grid auto-rows-fr grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {/* Number 1 */}
            <div className="relative overflow-clip rounded-md border border-border transition-transform ease-linear before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-card-gradient before:transition-[background-position] before:duration-300 before:ease-in-out before:content-[''] hover:border-transparent hover:bg-transparent hover:before:bg-card-gradient-hover sm:hover:scale-[1.025] [&:hover>div]:bg-card-dots-hover [&:hover_.darken-bg]:bg-black [&:hover_.darken-bg]:bg-opacity-30">
              <div className="z-20 flex h-full w-full flex-col gap-4 bg-card-dots p-card-inner transition-[background-position] duration-300 ease-in-out">
                <div className="flex-1">
                  <div className="rounded-md bg-chip bg-opacity-70 px-3 py-2">
                    <div>
                      <span className="text-xl font-bold">Hjemmeside</span>
                      <div>
                        <p>her er der en hjemmeside til at holde</p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <div className="flex w-full flex-1 flex-wrap items-end gap-4">
                        <span>TypeScript</span>
                        <span>HTML</span>
                        <span>Tailwind</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Number 2 */}
            <div className="relative overflow-clip rounded-md border border-border transition-transform ease-linear before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-card-gradient before:transition-[background-position] before:duration-300 before:ease-in-out before:content-[''] hover:border-transparent hover:bg-transparent hover:before:bg-card-gradient-hover sm:hover:scale-[1.025] [&:hover>div]:bg-card-dots-hover [&:hover_.darken-bg]:bg-black [&:hover_.darken-bg]:bg-opacity-30">
              <div className="z-20 flex h-full w-full flex-col gap-4 bg-card-dots p-card-inner transition-[background-position] duration-300 ease-in-out">
                <div className="flex-1">
                  <div className="rounded-md bg-chip bg-opacity-70 px-3 py-2">
                    <div className="bg-red-500 rounded-lg mb-5">
                      <span className="text-xl font-bold">Hjemmeside</span>
                      <div>
                        <p>
                          her er der en hjemmeside til at holde dfgdfgd
                          fgdfgdfgd fg df gdfg dfgdf gdfg dfg dfg dfg df
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <div className="flex w-full flex-1 flex-wrap items-end gap-4">
                        <span className="bg-gray-400 px-2 rounded-md">
                          TypeScript
                        </span>
                        <span className="bg-gray-400 px-2 rounded-md">
                          HTML
                        </span>
                        <span className="bg-gray-400 px-2 rounded-md">
                          Tailwind
                        </span>
                      </div>
                      <div className="flex h-full w-fit items-end justify-end">
                        <div className="darken-bg flex flex-col space-y-1 rounded-full bg-chip bg-opacity-70 p-1">
                          <a href="https://www.google.com">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                              height="20"
                              width="20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </a>
                          <a
                            aria-label="GitHub"
                            className="inline-block whitespace-nowrap transition-colors text-white hover:text-black"
                            href="https://www.google.com"
                          >
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              role="img"
                              viewBox="0 0 24 24"
                              height="20"
                              width="20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Number 3 */}
            <div className="relative overflow-clip rounded-md border border-border transition-transform ease-linear before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-card-gradient before:transition-[background-position] before:duration-300 before:ease-in-out before:content-[''] hover:border-transparent hover:bg-transparent hover:before:bg-card-gradient-hover sm:hover:scale-[1.025] [&:hover>div]:bg-card-dots-hover [&:hover_.darken-bg]:bg-black [&:hover_.darken-bg]:bg-opacity-30">
              <div className="z-20 flex h-full w-full flex-col gap-4 bg-card-dots p-card-inner transition-[background-position] duration-300 ease-in-out">
                <div className="flex-1">
                  <div className="rounded-md bg-chip bg-opacity-70 px-3 py-2">
                    <div>
                      <span className="text-xl font-bold">Hjemmeside</span>
                      <div>
                        <p>her er der en hjemmeside til at holde</p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <div className="flex w-full flex-1 flex-wrap items-end gap-4">
                        <span>TypeScript</span>
                        <span>HTML</span>
                        <span>Tailwind</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
