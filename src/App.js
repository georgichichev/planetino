import './App.css';
import Header from "./components/Header/Header.js";
import { BrowserRouter } from "react-router-dom";
import Planets from "./components/Planets/Planets.js";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Planets/>
            </div>
        </BrowserRouter>
    );
}

export default App;
