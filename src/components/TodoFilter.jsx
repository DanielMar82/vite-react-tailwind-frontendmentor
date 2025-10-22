const TodoFilter = ({ filter, changeFilter }) => {
  return (
    <>
      <section className="container mx-auto">
        <div className="flex justify-center gap-5 rounded-sm bg-white p-4 text-[18px] font-semibold text-gray-400 transition-all duration-700 dark:bg-[#35304b]">
          <button
            className={`${filter === "all" ? "text-blue-600 hover:text-gray-400" : "text-gray-400 hover:text-blue-600"}`}
            onClick={() => changeFilter("all")}
          >
            All
          </button>
          <button
            className={`${filter === "active" ? "text-blue-600 hover:text-gray-400" : "text-gray-400 hover:text-blue-600"}`}
            onClick={() => changeFilter("active")}
          >
            Active
          </button>
          <button
            className={`${filter === "complete" ? "text-blue-600 hover:text-gray-400" : "text-gray-400 hover:text-blue-600"}`}
            onClick={() => changeFilter("complete")}
          >
            Completed
          </button>
        </div>
      </section>
    </>
  );
};
export default TodoFilter;
