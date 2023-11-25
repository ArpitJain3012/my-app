import React from 'react';
import { Link, NavLink } from 'react-router-dom';
//import { useHistory } from "react-router-dom";

export default function Navbar() {
  //  const { history } = useHistory();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">My-App</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navContent" aria-controls="navContent"
                     aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item" data-testid='home'>
                                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item" data-testid='about'>
                                <NavLink className="nav-link" aria-current="page" to="/about">About</NavLink>
                            </li>
                        </ul>
                        <Link to="/add">  <button type='button'  data-testid='btn' className='btn btn-outline-light'>Add User</button></Link>
                    </div>
                   
                </div>
            </nav>
                  </div>
    )
}
