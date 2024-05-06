import Home from "../Home/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Design from "../Design/Design";

export default function AppRoutes(){
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/design" element={<Design/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}