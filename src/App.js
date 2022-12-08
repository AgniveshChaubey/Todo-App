import './App.css';
import { NavBar } from './components/NavBar.js';
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Todos } from './components/Todos';


function App() {

    let todos = [
        {
            sno: 1,
            title: "Complete homework",
            desc: "Do homework asap!"
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


