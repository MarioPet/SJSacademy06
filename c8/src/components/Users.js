import React from "react";

export const Users = (props) => {
    return (
        props.postslist.length > 0 ?
        <table border="1 ">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                {props.postslist.map(post => {
                    return (
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table> : <h2>Loading...</h2>
    )
}