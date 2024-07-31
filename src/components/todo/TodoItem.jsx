import React, { useState } from "react";
import { FaRegEdit, FaRegSave } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import useTodo from "./useTodo";

export default function TodoItem({ todo }) {
    const [isEditable, setIsEditable] = useState(false);
    const [isComplete, setIsComplete] = useState(todo.completed);
    const [editTodoValue, setEditTodoValue] = useState(todo.todo);
    const { updateTodo, deleteTodo } = useTodo();

    return (
        <div
            className={` w-1/2 px-4 py-2 shadow-md rounded-md flex justify-evenly gap-2 ${
                isComplete ? " bg-lime-300 opacity-60" : "bg-gray-100"
            }`}
            id={todo.id}
        >
            <input
                type="checkbox"
                name="active"
                id="active1"
                onChange={() => {
                    setIsComplete(!isComplete);
                    updateTodo(todo.id, { completed: !isComplete });
                }}
                checked={todo.completed}
            />
            <input
                type="text"
                name="todo"
                id={todo.id}
                className={`w-4/5 outline-none bg-transparent border-2 border-transparent px-2 py-1  ${
                    isComplete ? "line-through" : ""
                } ${isEditable ? "border-2 border-gray-300" : ""}`}
                readOnly={!isEditable}
                value={editTodoValue}
                onChange={(e) => setEditTodoValue(e.target.value)}
            />
            {isEditable ? (
                <FaRegSave
                    className="cursor-pointer self-center text-blue-600 text-xl"
                    onClick={() => {
                        if (!isComplete) {
                            setIsEditable(!isEditable);
                            updateTodo(todo.id, { todo: editTodoValue });
                        }
                    }}
                />
            ) : (
                <FaRegEdit
                    className="cursor-pointer self-center text-blue-600 text-xl"
                    onClick={() => {
                        if (!isComplete) {
                            const element = document.getElementById(
                                `${todo.id}`
                            );
                            setIsEditable(!isEditable);
                            element.focus();
                        }
                    }}
                />
            )}
            <MdDeleteForever
                className="cursor-pointer self-center text-red-500 text-2xl"
                onClick={() => deleteTodo(todo.id)}
            />
        </div>
    );
}
