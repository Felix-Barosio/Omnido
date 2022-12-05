import { BsCheckLg, BsFillTrashFill, BsXSquareFill } from "react-icons/bs";
import React from "react";

function Todo({ todo, onItemUpdate, onItemDelete }) {
    function handleDone() {
        fetch(`/todos/${todo.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                done: !todo.done,
            }),
        })
            .then((res) => res.json())
            .then((updatedItem) => onItemUpdate(updatedItem));
    }

    function handleDelete() {
        fetch(`/todos/${todo.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json)
            .then(() => onItemDelete(todo));
    }
    return (
        <div>
            <li className={todo.done ? "done" : ""}>
                <span>{todo.text}</span>
                <span className="category">{todo.category}</span>
                <button className="btn check" onClick={handleDone}>
                    {todo.done ? <BsCheckLg /> : <BsXSquareFill />}
                </button>
                <button className="remove btn" onClick={handleDelete}>
                    <BsFillTrashFill />
                </button>
            </li>
        </div>
    );
}

export default Todo;
