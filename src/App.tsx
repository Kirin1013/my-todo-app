//Todoアプリのメインコンポーネント
//全体の状態（todosの配列）を管理
// 子コンポーネント（TodoInput, TodoList）を使ってUIを構成
//Todoの追加や更新の関数もここで持っている


import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import type { Todo } from "./types/todo";


function App(){
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: "最初のタスク", completed: false},
  ]);

  const handleAdd = (title: string) => {
    const newTodo: Todo ={
      id: todos.length + 1,
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleToggle = (id: number) => {
    const newTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6">
      <h1 className="text-3xl font-bold text-blue-600">tailwind CSS 動作確認！</h1>
      <TodoInput onAdd={handleAdd} />
      <TodoList todos={todos} onToggle={handleToggle} />
      </div>
    </div>
  );
}

export default App;