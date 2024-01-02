import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Main } from "./pages/main";
import { Login } from "./pages/login";
import "./App.css";
import { Navbar } from "./componennts/navbar";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Main />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="*" element={<h1>Page not Found</h1>}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
