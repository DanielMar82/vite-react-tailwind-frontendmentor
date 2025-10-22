import { useState } from "react";

const TodoCreate = ({ createTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmitAddTodo = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      return setTitle("");
    }

    createTodo(title);
    setTitle("");
  };

  return (
    <>
      <form
        onSubmit={handleSubmitAddTodo}
        className="flex items-center gap-3 overflow-hidden rounded-md bg-white p-5 transition-all duration-700 dark:bg-[#35304b]"
      >
        <span className="inline-block h-5 w-5 rounded-full border-1 border-gray-400"></span>
        <input
          className="w-full outline-none dark:text-gray-300"
          type="text"
          placeholder="Create a new todo..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>
    </>
  );
};

export default TodoCreate;
