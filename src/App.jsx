import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-200 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat px-7">
        <header className="container mx-auto text-center">
          <div className="flex justify-between py-12">
            <h1 className="text-3xl font-semibold tracking-[0.3em] text-white uppercase">
              Todo
            </h1>
            <button>
              <MoonIcon className="fill-amber-600" />
            </button>
          </div>
          <form className="flex items-center gap-3 overflow-hidden rounded-md bg-white p-4">
            <span className="inline-block h-5 w-5 rounded-full border-1 border-gray-400"></span>
            <input
              className="w-full outline-none"
              type="text"
              placeholder="Create a new todo..."
            />
          </form>
        </header>

        <main className="container mx-auto my-5 text-[15px]">
          <div className="rounded-md bg-white">
            <article className="flex items-center gap-3 border-b-2 border-b-gray-200 p-5 text-gray-300">
              <span className="inline-block h-5 w-5 flex-none rounded-full border-1 border-gray-400"></span>
              <p className="grow">Complete online JavaScript course</p>

              <button className="flex-none">
                <CrossIcon />
              </button>
            </article>

            <article className="flex items-center gap-3 border-b-2 border-b-gray-200 p-5">
              <span className="inline-block h-5 w-5 flex-none rounded-full border-1 border-gray-400"></span>
              <p className="grow">Jog around the park 3x</p>

              <button className="flex-none">
                <CrossIcon />
              </button>
            </article>

            <article className="flex items-center gap-3 border-b-2 border-b-gray-200 p-5">
              <span className="inline-block h-5 w-5 flex-none rounded-full border-1 border-gray-400"></span>
              <p className="grow">10 minutes meditation</p>

              <button className="flex-none">
                <CrossIcon />
              </button>
            </article>

            <article className="flex items-center gap-3 border-b-2 border-b-gray-200 p-5">
              <span className="inline-block h-5 w-5 flex-none rounded-full border-1 border-gray-400"></span>
              <p className="grow">Read for 1 hour</p>

              <button className="flex-none">
                <CrossIcon />
              </button>
            </article>

            <article className="flex items-center gap-3 border-b-2 border-b-gray-200 p-5">
              <span className="inline-block h-5 w-5 flex-none rounded-full border-1 border-gray-400"></span>
              <p className="grow">Pick up groceries</p>

              <button className="flex-none">
                <CrossIcon />
              </button>
            </article>

            <article className="flex items-center gap-3 border-b-2 border-b-gray-200 p-5">
              <span className="inline-block h-5 w-5 flex-none rounded-full border-1 border-gray-400"></span>
              <p className="grow">Complete Todo App on Frontend Mentor</p>

              <button className="flex-none">
                <CrossIcon />
              </button>
            </article>

            <section className="flex justify-between p-5 text-gray-400">
              <span>5 items left</span>
              <button>Clear Completed</button>
            </section>
          </div>
        </main>

        <section className="container mx-auto">
          <div className="flex justify-center gap-5 rounded-sm bg-white p-4 text-[18px] font-semibold text-gray-400">
            <button className="text-blue-600">All</button>
            <button>Active</button>
            <button>Completed</button>
          </div>
        </section>

        {/* TODO: para más adelante */}
        <p className="my-15 text-center font-semibold text-gray-400">
          Drag and drop to reorder list
        </p>
        <p className="my-15 text-center font-semibold text-gray-400">
          Drag and drop to reorder list
        </p>
      </div>
    </>
  );
};

export default App;
