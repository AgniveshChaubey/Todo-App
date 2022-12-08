import './App.css';
import { NavBar } from './components/NavBar.js';
import { Todos } from './components/Todos';
import { useState } from 'react';
import { Footer } from './components/Footer';

function App() {

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

    const onDelete = (todo)=>{
        console.log("i am delete",todo);
        setTodos(todos.filter((e)=>{
            return e!==todo;
        }));
    }

    return (
        <>
            <NavBar title={'My Todos'} />
            <Todos todos={todos} onDelete={onDelete} />
            <Footer />
        </>
    );
}

export default App;


