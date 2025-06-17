//Todoを入力→追加できるようになるコンポーネント
//新しいTodoタイトルを入力するテキストボックス
//入力内容を管理（useState）
//送信時に親コンポーネント（App）へタイトルを渡す役割

import { useState } from "react";

type Props = {
    onAdd: (title: string) => void;
};

const TodoInput: React.FC<Props> = ({ onAdd }) => {
    const [input, setInput] = useState("");

    const handleSubmit =(e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;
        onAdd(input);
        setInput("");
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
            <input
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="新しいTodoを追加"
              className="flex-1 border rounded px-3 py-2 text-gray-800 bg-white"
            />
            <button 
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >追加</button>
        </form>
);

};

export default TodoInput;
