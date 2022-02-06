import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Login, Register, Main, InputTransaction, OutputTransaction} from "./pages";
import GlobalStyle from "./GlobalComponents/GlobalStyle";
import Reset from "./GlobalComponents/Reset";

function App(){
    return (
    <BrowserRouter>
        <Reset />
        <GlobalStyle />
    <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/input" element={<InputTransaction />}></Route>
        <Route path="/output" element={<OutputTransaction />}></Route>
    </Routes>
    </BrowserRouter>
    );
}
export default App;