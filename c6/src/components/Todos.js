import React from "react";

export const Todos = (props) => {
    return (
        <ol>
            {props.todolist.map(t => {
                return <li key={t.id}><h2>{t.todo} <input type="checkbox" /> </h2></li>
            })}
        </ol>
    )
}