import CheckIcon from "./icons/CheckIcon";
import CrossIcon from "./icons/CrossIcon";

const TodoItem = ({ todo, updateTodo, removeTodo }) => {
  const { id, title, complete } = todo;

  return (
    <>
      <article className="flex items-center gap-3 border-b-1 border-b-gray-200 p-5 transition-all duration-700 dark:border-b-gray-500 dark:text-gray-300">
        <button
          onClick={() => updateTodo(id)}
          className={`h-5 w-5 flex-none cursor-pointer rounded-full border-1 border-gray-400 ${complete ? "flex items-center justify-center bg-gradient-to-tl from-purple-600 to-cyan-500" : "inline-block"}`}
        >
          {complete && <CheckIcon />}
        </button>
        <p className={`grow ${complete && "text-gray-400 line-through"}`}>
          {title}
        </p>

        <button
          onClick={() => removeTodo(id)}
          className="flex-none cursor-pointer"
        >
          <CrossIcon />
        </button>
      </article>
    </>
  );
};
export default TodoItem;
