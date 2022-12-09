import './App.css';
import { NavBar } from './components/NavBar.js';
import { Todos } from './components/Todos';
import { useState } from 'react';
import { Footer } from './components/Footer';
import { AddTodos } from './components/AddTodos';

function App() {

    const onDelete = (todo) => {
        console.log("i am delete", todo);

        setTodos(todos.filter((e) => {
            return e !== todo;
        }));
    }

    const addTodo = (title, desc) => {
        console.log("todo is adding", title, desc)
        let sno;
        if (todos.length == 0) {
            sno = 0;
        } else {
            sno = todos[todos.length - 1].sno + 1;
        }
        const myTodo = {
            sno: sno,
            title: title,
            desc: desc,
        }
        setTodos(...todos, myTodo);
        console.log(myTodo);
    }

    const [todos, setTodos] = useState([
        {
            sno: 1,
            title: "Complete homework",
            desc: "Do homework asap!"
        },
        {
            sno: 2,
            title: "Complete homeworkkk",
            desc: "Doooo homework asap!"
        },
        {
            sno: 3,
            title: "Complete homeworkkkkkkk",
            desc: "Dooooooooo homework asap!"
        }
    ]);

    return (
        <>
            <NavBar title={'My Todos'} />
            <AddTodos addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />
            <Footer />
        </>
    );
}

export default App;


