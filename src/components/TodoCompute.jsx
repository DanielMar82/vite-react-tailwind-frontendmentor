const TodoCompute = ({ computedItemsLeft, clearComplete }) => {
  return (
    <>
      <section className="flex justify-between p-5 text-gray-400 dark:text-gray-500">
        <span>{computedItemsLeft} items left</span>
        <button className="cursor-pointer" onClick={clearComplete}>
          Clear Completed
        </button>
      </section>
    </>
  );
};
export default TodoCompute;
