import { Link } from "react-router-dom"
import {CssBaseline, Grid} from '@material-ui/core';
import "./MainPage.css"
import Navbar from "../Navbar";
const MainPage = () => {
    return (
        <div classname="mainpage">
            <Navbar />
        <section>
            <h1>Main Page</h1>
            <br/>
            <div>
            <h2>Public</h2>
            <ul>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/">Home</Link></li>
            </ul>
           </div>
           <div>
            <br/>
            <h2>Private</h2>
            <ul>
                <li><Link to="/admin">Admin Page</Link></li>
                <li><Link to="/driver">Driver Page</Link></li>
                <li><Link to="/maintenance">Maintenance Page</Link></li>
                <li><Link to="/fueling">Fueling Page</Link></li>
            </ul>
            </div>
        </section>
        </div>
    )
}

export default MainPage
