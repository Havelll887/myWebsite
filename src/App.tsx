import './App.scss';
import "@/common/css/common.css"

import { HashRouter } from "react-router-dom";
import Router from "./router/index"

function App() {
    return (
        <HashRouter>
            <Router />
        </HashRouter>
    );
}

export default App;
