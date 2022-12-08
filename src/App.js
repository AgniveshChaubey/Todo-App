import './App.css';
import { NavBar } from './components/NavBar.js';
import { Todos } from './components/Todos';


function App() {

    let todos = [
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
    ]

    return (
        <>
            <NavBar title={'My Todos'} />
            <Todos todos={todos} />
            
        </>
    );
}

export default App;


