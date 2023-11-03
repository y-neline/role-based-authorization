import { useState, useEffect } from "react";
//import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";

const Users = () => {
    const [users, setUsers] = useState();
   //const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();

    

    return (
        <article>
            <h2>Users List</h2>
            <p>No users to display</p>
        
        </article>
    );
};

export default Users;