import './App.css';
import { BrowserRouter } from "react-router-dom";
import Planets from "./components/Planets/Planets.js";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Planets/>
            </div>
        </BrowserRouter>
    );
}

export default App;
