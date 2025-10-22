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
      <div className="rounded-md bg-white dark:bg-[#35304b]">
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
