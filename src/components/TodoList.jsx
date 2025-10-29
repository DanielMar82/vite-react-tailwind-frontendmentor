import { Droppable, Draggable } from "@hello-pangea/dnd";
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
        <Droppable droppableId="todos">
          {(droppableProvided) => (
            <div
              ref={droppableProvided.innerRef}
              {...droppableProvided.droppableProps}
            >
              {todos.map((todo, index) => (
                <Draggable
                  key={todo.id}
                  index={index}
                  draggableId={`${todo.id}`}
                >
                  {(draggableProvided) => (
                    <TodoItem
                      todo={todo}
                      updateTodo={updateTodo}
                      removeTodo={removeTodo}
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.dragHandleProps}
                      {...draggableProvided.draggableProps}
                    />
                  )}
                </Draggable>
              ))}
              {droppableProvided.placeholder}
            </div>
          )}
        </Droppable>

        <TodoCompute
          computedItemsLeft={computedItemsLeft}
          clearComplete={clearComplete}
        />
      </div>
    </>
  );
};
export default TodoList;
