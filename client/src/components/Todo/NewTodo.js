import React, { useState } from "react";

function NewTodo({ onAddItem }) {
    const [text, setText] = useState("");
    const [category, setCategory] = useState("Any");

    function handleSubmit(e) {
        e.preventDefault();
        const newTodo = {
            text: text,
            category: category,
            done: false,
        };
        fetch("/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newTodo),
        })
            .then((res) => res.json())
            .then((newItem) => onAddItem(newItem));
        setText("");
        setCategory("Any");
    }

    return (
        <div>
            <form className="newItem" onSubmit={handleSubmit}>
                <label>
                    <p className="content">
                        Categories:{" "}
                        <select
                            name="category"
                            value={category}
                            className="content"
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="Any">Any</option>
                            <option value="Coding">Coding</option>
                            <option value="Laundry">Laundry</option>
                            <option value="Shopping">Shopping</option>
                            <option value="Relaxing">Relaxing</option>
                        </select>
                    </p>
                </label>
                <label>
                    <p className="content">
                        New Todos:{" "}
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter todo"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                    </p>
                </label>

                <button className="btn add" type="submit">
                    Add
                </button>
            </form>
        </div>
    );
}

export default NewTodo;
