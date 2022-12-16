import { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { Redirect, useLocation } from "react-router-dom";
import { redirect } from "react-router";

const Users = () => {
    const [users, setUsers] = useState();
    const axiosPrivate = useAxiosPrivate();
    const navigate = redirect();
    const location = useLocation();

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getUsers = async () => {
                const response = await axiosPrivate.get('/users', {
                    signal: controller.signal
                });
                console.log(response.data);
                isMounted && setUsers(response.data);
            
        }



        getUsers();

        
    }, [])

    return (
        <article>
            <h2>Users List</h2>
            {users?.length
                ? (
                    <ul>
                        {users.map((user, i) => <li key={i}>{user?.username}</li>)}
                    </ul>
                ) : <p>No users to display</p>
            }
        </article>
    );
};

export default Users;