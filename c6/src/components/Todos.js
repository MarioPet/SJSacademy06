import React from "react";

export const Todos = (props) => {
    return (
        <ol>
            {props.todolist.map(t => {
                return (
                <li className={t.done ? "marked-done" : ""} key={t.id}>
                    <span>{t.todo} &nbsp;
                        <input
                            onChange={() => props.markTodoAsDone(t)} 
                            checked={props.done}
                            value={props.done}
                            type="checkbox"
                        />
                    </span>
                </li>)
            })}
        </ol>
    )
}

