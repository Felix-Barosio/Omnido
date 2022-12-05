import React, { useEffect, useState } from "react";
import NewTodo from "./NewTodo";
import Sort from "./Sort";
import Todo from "./Todo";
import "./Todo.css";

function TodoList() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch("/todos")
            .then((res) => res.json())
            .then((data) => setTodos(data));
    }, []);
    //handle adding
    function handleAddTodo(newItem) {
        setTodos((todos) => [...todos, newItem]);
    }
    //handle upadting
    function handleUpdateItem(updatedItem) {
        const updatedItems = todos.map((item) => {
            return item.id === updatedItem.id ? updatedItem : item;
        });
        setTodos(updatedItems);
    }
    //handle delete
    function handleDeleteItem(deletedItem) {
        const updatedItems = todos.filter((item) => item.id !== deletedItem.id);
        setTodos(updatedItems);
    }
    //handle categories
    function handleCategoryChange(category) {
        setSelectedCategory(category);
    }
    //display category
    const todosToDisplay = todos.filter((item) => {
        if (selectedCategory === "All") return true;

        return item.category === selectedCategory;
    });

    return (
        <div className="container-fluid">
            <div className="todoList">
                <div className="header">Tasks</div>
                <NewTodo onAddItem={handleAddTodo} />
                <Sort
                    category={selectedCategory}
                    onCategoryChange={handleCategoryChange}
                />
                <ul className="todos">
                    {todosToDisplay.map((todo) => (
                        <Todo
                            key={todo.id}
                            todo={todo}
                            onUpdateItem={handleUpdateItem}
                            onItemDelete={handleDeleteItem}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default TodoList;