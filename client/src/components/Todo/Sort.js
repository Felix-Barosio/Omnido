import React from "react";

function Sort({ category, onCategoryChange }) {
    return (
        <div className="sort">
            <select
                name="sort"
                value={category}
                className="content"
                onChange={(e) => onCategoryChange(e.target.value)}
            >
                <option value="All">Sort by Categories...</option>
                <option value="Any">Any</option>
                <option value="Coding">Coding</option>
                <option value="Laundry">Laundry</option>
                <option value="Shopping">Shopping</option>
                <option value="Relaxing">Relaxing</option>
            </select>
        </div>
    );
}

export default Sort;
