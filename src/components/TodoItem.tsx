//１件分のTodoを表示するコンポーネント
//完了、未完了の状態を見せるだけ


import type { Todo } from "../types/todo";

type Props = {
    todo: Todo;
    onToggle: (id: number) => void;
};

const TodoItem: React.FC<Props> = ({ todo, onToggle }) => {
    return (
        <li className="flex items-center gap-2 py-2 border-b">
            <input 
            type="checkbox" 
            checked={todo.completed} 
            onChange={() => onToggle(todo.id)}
            className="form-checkbox h-5 text-blue-500"
             />
            <span
             className={
                todo.completed
                 ? "line-through text-gray-400"
                 : "text-gray-800"} >
                {todo.title} 
            </span>
        </li>
    );
};



export default TodoItem;