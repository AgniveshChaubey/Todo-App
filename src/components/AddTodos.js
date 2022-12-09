import React, { useState } from 'react'

export const AddTodos = ({ addTodo }) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank")
        } else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }

    return (
        <form className='container' onSubmit={submit}>
            <h3 className='mt-3 text-center'>Add a Todo</h3>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Todo title</label>
                <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Todo description</label>
                <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="description" />
            </div>
            <button type="submit" className="btn btn-outline-success btn-sm">Add Todo</button>
        </form>
    )
}
