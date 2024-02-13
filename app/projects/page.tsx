export default function Project() {
  return (
    <div className="scrollbar flex flex-1 flex-col overflow-y-scroll pt-12">
      <div className="flex-1 gap-8 p-4 transition-[padding] sm:p-8">
        <div className="mx-auto h-full max-w-6xl">
          <div className="grid auto-rows-fr grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
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
