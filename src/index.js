import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './styles/main.css';

const App = () => (
    <div className = "header">
        <h2>React Starter Package</h2>
    </div>
)

render( <App/> , document.getElementById('react-container'));