import { Link } from "react-router-dom"

const MainHome = () => {
    return (
        <section>
            <h1>Main Page</h1>
            <br />
            <h2>Public</h2>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <br />
            <h2>Private</h2>
            <Link to="/">Home</Link>
            <Link to="/admin">Admin Page</Link>
            <Link to="/driver">Driver Page</Link>
            <Link to="/maintenance">Maintenance Page</Link>
            <Link to="/fueling">Fueling Page</Link>
        </section>
    )
}

export default MainHome
