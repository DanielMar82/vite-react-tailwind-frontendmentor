import MoonIcon from "./icons/MoonIcon";

const Header = () => {
  return (
    <>
      <header className="container mx-auto text-center">
        <div className="flex justify-between py-12">
          <h1 className="text-3xl font-semibold tracking-[0.3em] text-white uppercase">
            Todo
          </h1>
          <button>
            <MoonIcon className="fill-amber-600" />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
