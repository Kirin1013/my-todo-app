//Todo一覧をmapでループして表示
//Todoの配列（todos）を受け取り、リスト表示の役割
//各TodoをTodoItemコンポーネントに渡して個別に表示


import type { FC } from "react";
import type { Todo } from "../types/todo";
import TodoItem from "./TodoItem";


type Props = {
    todos: Todo[];
    onToggle: (id: number) => void;
};

const TodoList: FC<Props> = ({ todos, onToggle }) => {
    return (
        <ul className="space-y-2">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo}  onToggle={onToggle} />
            ))}
        </ul>
    );
};

export default TodoList;