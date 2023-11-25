import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

export default function Home() {
    const [user, setUser] = useState([]);
    const [pageNum, setpageNum] = useState(0);
    const [sorted, setSorted] = useState("ASC");
    // const [sortedField, setSortedField] = React.useState(null);

    useEffect(() => {
        loadUsers();
    }, [])

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3000/data");
        setUser(result.data)
    }
    //------------deleting user------------

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:3000/data/${id}`);
        alert(`You want to delete user with ID : ${id}`)
        loadUsers();
    };
    //------------------render rows----------------

    const renderRows = () => {
        return user
            .slice(pageVisited, pageVisited + usersPerPage)
            .map((user) => (
                <>
                    <tr>
                        <th scope='row'>{user.id}</th>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>
                            <Link className='btn btn-primary mx-2'
                                to={`/user/${user.id}`}>View</Link>
                            <Link className='btn btn-outline-primary mx-2'
                                to={`/edit/${user.id}`}>Edit</Link>
                            <Link className='btn btn-danger mx-2'
                                onClick={() => deleteUser(user.id)} to='/'>Delete</Link></td>

                    </tr>
                </>
            ))
    }
    //-----------------sorting------------

    const sorting = (col) => {
        if (sorted === "ASC") {
            const sorted = [...user].sort((a, b) => 
                a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            );
            setUser(sorted);
            setSorted("DSC");
        }
        if (sorted === "DSC") {
            const sorted = [...user].sort((a, b) => 
                a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
            );
            setUser(sorted);
            setSorted("ASC");
        }

    }

    //-------------------------------pagination---------------
    const usersPerPage = 10;
    const pageVisited = pageNum * usersPerPage;

    const pageCounted = Math.ceil(user.length / usersPerPage);

    const changePage = ({ selected }) => {
        setpageNum(selected);
    }


    return (
        <div className='container'>
            <div className='py-4'>
                <h1>Home</h1>
                <table className="table table-striped  shadow">
                    <thead className='table-dark'>
                        <tr>

                            <th scope="col">Primary ID</th>
                            <th scope="col" className='btnss' onClick={() => sorting("name")}>Name</th>
                            <th scope="col" className='btnss' onClick={() => sorting("username")}>User Name</th>
                            <th scope="col" className='btnss' onClick={() => sorting("email")}>Email</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderRows()}
                    </tbody>
                </table>
            </div>
            < ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCounted}
                onPageChange={changePage}
                containerClassName={"paginationBtns"}
                previousLinkClassName={"privousBtn"}
                nextLinkClassName={"nextBtn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            />
        </div>
    )
}

