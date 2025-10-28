import TodoCompute from "./TodoCompute";
import TodoItem from "./TodoItem";

const TodoList = ({
  todos,
  updateTodo,
  removeTodo,
  computedItemsLeft,
  clearComplete,
}) => {
  return (
    <>
      <div className="rounded-md bg-white shadow-2xl transition-all duration-700 dark:bg-[#35304b]">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            updateTodo={updateTodo}
            removeTodo={removeTodo}
          />
        ))}

        <TodoCompute
          computedItemsLeft={computedItemsLeft}
          clearComplete={clearComplete}
        />
      </div>
    </>
  );
};
export default TodoList;
