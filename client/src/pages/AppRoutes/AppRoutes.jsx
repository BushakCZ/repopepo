import Home from "../Home/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Contact from "../Contact/Contact";

export default function AppRoutes(){
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}