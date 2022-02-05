import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Login, Register, Main, Input, Output} from "./pages";
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
        <Route path="/input" element={<Input />}></Route>
        <Route path="/output" element={<Output />}></Route>
    </Routes>
    </BrowserRouter>
    );
}
export default App;