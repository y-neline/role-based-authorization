import { Link } from "react-router-dom"

const Driver = () => {
    return (
        <section>
            <h1>Drivers Page</h1>
            <br />
            <p>You must have been assigned a Driver role.</p>
            <div className="flexGrow">
                <Link to="/">Home</Link>
            </div>
        </section>
    )
}

export default Driver