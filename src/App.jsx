import { DragDropContext } from "@hello-pangea/dnd";

import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

const App = () => {
  const [todos, setTodos] = useState(initialStateTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      complete: false,
    };

    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo,
      ),
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const computedItemsLeft = todos.filter((todo) => !todo.complete).length;

  const clearComplete = () => {
    setTodos(todos.filter((todo) => !todo.complete));
  };

  const [filter, setFilter] = useState("all");
  const changeFilter = (filter) => setFilter(filter);

  const filteredTodos = () => {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.complete);
      case "complete":
        return todos.filter((todo) => todo.complete);
      default:
        return todos;
    }
  };

  const handleDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return;
    if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    )
      return;

    setTodos((prevTasks) =>
      reorder(prevTasks, source.index, destination.index),
    );
  };

  return (
    <>
      <div className="min-h-screen bg-gray-200 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat px-7 transition-all duration-700 md:bg-[url('./assets/images/bg-desktop-light.jpg')] dark:bg-[#171520] dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]">
        <Header />

        <main className="container mx-auto my-5 flex max-w-2xl flex-col gap-5 text-[15px]">
          <TodoCreate createTodo={createTodo} />

          <DragDropContext onDragEnd={handleDragEnd}>
            <TodoList
              todos={filteredTodos()}
              updateTodo={updateTodo}
              removeTodo={removeTodo}
              computedItemsLeft={computedItemsLeft}
              clearComplete={clearComplete}
            />
          </DragDropContext>

          <TodoFilter filter={filter} changeFilter={changeFilter} />
        </main>

        <footer className="my-15 text-center font-semibold text-gray-400 transition-all duration-700 dark:text-gray-600">
          Drag and drop to reorder list
        </footer>
      </div>
    </>
  );
};

export default App;
