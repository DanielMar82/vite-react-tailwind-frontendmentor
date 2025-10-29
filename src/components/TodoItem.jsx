import React from "react";
import CheckIcon from "./icons/CheckIcon";
import CrossIcon from "./icons/CrossIcon";

const TodoItem = React.forwardRef(
  ({ todo, updateTodo, removeTodo, ...props }, ref) => {
    const { id, title, complete } = todo;

    return (
      <>
        <article
          {...props}
          ref={ref}
          className="flex items-center gap-3 rounded-t-md border-b border-b-gray-200 bg-white p-5 transition-colors duration-700 dark:border-b-gray-500 dark:bg-[#35304b] dark:text-gray-300"
        >
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
  },
);

export default TodoItem;
