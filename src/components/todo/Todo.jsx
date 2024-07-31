import React, { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import useTodo, { TodoContextProvider } from "./useTodo";
import { nanoid } from "nanoid";

export default function Todo() {
    const [todosList, setTodosList] = useState([]);

    const addTodo = (todo) => {
        setTodosList((prevTodos) => [
            ...prevTodos,
            { id: nanoid(), todo, completed: false },
        ]);
        localStorage.setItem("todos", JSON.stringify(todosList));
    };
    const updateTodo = (id, todol) => {
        setTodosList((prevTodos) =>
            prevTodos.map((currTodo) =>
                currTodo.id === id ? { ...currTodo, ...todol } : currTodo
            )
        );
    };
    const deleteTodo = (id) => {
        setTodosList((prevTodos) =>
            prevTodos.filter((currTodo) => currTodo.id !== id)
        );
    };
    useEffect(() => {
        const localTodos=JSON.parse(localStorage.getItem("todos"))
        if(localTodos&&localTodos.length>0)
            setTodosList(localTodos);
    }, []);
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todosList));
    }, [todosList]);

    return (
        <TodoContextProvider
            value={{ todosList, addTodo, updateTodo, deleteTodo }}
        >
            <div className="w-full h-screen bg-slate-500 flex flex-col items-center p-10 gap-2">
                <TodoInput />
                {todosList.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </div>
        </TodoContextProvider>
    );
}
