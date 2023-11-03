import { Link } from "react-router-dom"

const Maintenance = () => {
    return (
        <section>
            <h1>The Maintenance</h1>
            <br />
            <p>Admins and Maintenance person can hang out here.</p>
            <div className="flexGrow">
                <Link to="/">Home</Link>
            </div>
        </section>
    )
}

export default Maintenance