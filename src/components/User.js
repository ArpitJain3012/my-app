import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function User() {
    const { id } = useParams();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: ""
    });

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3000/data/${id}`);
        setUser(result.data);
    }

    //----------use eefect------------
    useEffect(() => {
        loadUser();
    }, [])

    return (
        <div className='container'>
            <Link className='btn btn-primary my-4' to='/'> Back to Home</Link>

            <h1 className='display-4'>User Id: {id}</h1>
            <hr />
            <ul className='list-group w-50'>
                <li className='list-group-item'>Name : {user.name}</li>
                <li className='list-group-item'>UserName : {user.username}</li>
                <li className='list-group-item'>Email : {user.email}</li>
                <li className='list-group-item'>Mobile Number : {user.phone}</li>
            </ul>

        </div>
    )
}
