import { Link } from "react-router-dom"

const Fueling = () => {
    return (
        <section>
            <h1>Fueling Persons Page</h1>
            <br />
            <p>You must have been assigned a Fueling role.</p>
            <div className="flexGrow">
                <Link to="/">Home</Link>
            </div>
        </section>
    )
}

export default Fueling