import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { Weather } from "./features/weather/Weather";
import { Spinner } from "./features/util/Spinner";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Weather />
            </header>
        </div>
    );
}

export default App;
