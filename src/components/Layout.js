import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

import About from "./pages/About"
import MainHome from "./pages/MainHome"
import Contact from "./pages/Contact"
import Services from "./pages/Services"
import { Routes, Route } from 'react-router-dom';



const Layout = () => {
    return (
        <main className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<MainHome/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/services" element={<Services/>}/>
            </Routes>
            <Outlet />
            
        </main>
    )
}

export default Layout