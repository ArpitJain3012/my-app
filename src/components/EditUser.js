import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";

export default function EditUser() {
    const { register, handleSubmit, formState: { errors }, trigger } = useForm({
        defaultValues: {
            name: "",
            username: "",
            email: "",
            phone: ""
        }

    });
    let navigate = useNavigate();
    const { id } = useParams();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: ""

    });

    const { name, username, email, phone } = user;


    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3000/data/${id}`);
        console.log(result)
        setUser(result.data);
    }

    //----------use fefect------------
    useEffect(() => {

        // if (name !== "") { unregister("name", { keepDirty: false }, { keepTouched: false }, { keepValue: false }); }
        // if (email !== "") { unregister("email"); }
        // if (username !== "") { unregister("username"); }
        // if (phone !== "") { unregister("phone"); }
        loadUser();

        //  axios.get(`http://localhost:3000/data/${id}`).then((res)=>{
        //     reset(res.data);
        // })
    }, [])

    //------------------handle change--------------
    const handleChange = (e) => {

        let { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    //------------------handle submit--------------------
    const inputSubmit = async (data, e) => {
        // const result = {
        //     "name": data.name,
        //     "username": data.username,
        //     "email": data.email,
        //     "phone": data.phone
        // }
        // console.log(result);
        const result = await axios.put(`http://localhost:3000/data/${id}`, user);
        console.log(result);
        navigate("/");

    };

    return (
        <div className='container py-3 '>
            <h1>Edit User</h1>
            <form onSubmit={handleSubmit(inputSubmit)}>
                <div className="mb-3 my-4">
                    <label htmlFor="name" className={`form-label ${errors.name && ("err")}`}>Name</label>
                    <input type="text" className={`form-control ${errors.name && ("invalid")}`} id="name" name='name'
                        placeholder='Enter Name' value={name} onChange={handleChange}  {...name !== "" && {
                            ...register("name", {
                                 onChange: (e) => handleChange(e),
                                required: 'Name is required',
                                maxLength: { value: 20, message: "Name Cannot be more than 20 characters" },
                                minLength: { value: 0, message: "Name must be more than 4 characters" },
                                pattern: { value: /^[a-zA-z]+([\s][a-zA-Z]+)*$/, message: "Name must be characters only" }
                            })
                        }}


                        onKeyUp={() => { trigger("name") }} />
                    {errors.name && (<p className='text-danger'>{errors.name.message}</p>)}

                </div>

                <div className="mb-3">
                    <label htmlFor="email" className={`form-label ${errors.email && ("err")}`}>Email address</label>
                    <input type="email" className={`form-control ${errors.email && ("invalid")}`} id="email" name='email' aria-describedby="emailHelp"
                        placeholder='Enter Email' value={email} onChange={handleChange}    {...email !== "" && {
                            ...register('email', {
                                onChange: (e) => handleChange(e),
                                required: 'Email is required',
                                pattern: { value: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/, message: "invalid email address" }
                            })
                        }}
                        onKeyUp={() => { trigger("email") }} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    {errors.email && (<p className='text-danger'>{errors.email.message}</p>)}

                </div>

                <div className="mb-3">
                    <label htmlFor="username" className={`form-label ${errors.username && ("err")}`}>User Name</label>
                    <input type="text" className={`form-control ${errors.username && ("invalid")}`} id="uname" name='username'
                        placeholder='Enter UserName' value={username} onChange={handleChange}   {...username !== "" && {
                            ...register('username', {
                                 onChange: (e) => handleChange(e),
                                required: 'username is required',
                                pattern: { value: /^[A-Za-z0-9]+$/, message: "invalid username" }
                            })
                        }}
                        onKeyUp={() => { trigger("username") }} />

                    {errors.username && (<p className='text-danger'>{errors.username.message}</p>)}

                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className={`form-label ${errors.phone && ("err")}`}>Mobile Nmber</label>
                    <input type="text" className={`form-control ${errors.username && ("invalid")}`} id="phone" name='phone' min={10} max={10}
                        placeholder='Enter Number' value={phone} onChange={handleChange}  {...phone !== "" && {
                            ...register("phone", {
                                 onChange: (e) => handleChange(e),
                                required: 'Mobile Number is required', maxLength: { value: 10, message: 'Mobile Number Cannot be more than 10 Numbers' },
                                minLength: { value: 10, message: 'Mobile number should be 10 numbers' },
                                pattern: {
                                    value: /^[0-9]+$/, message: "invalid mobile number"
                                }
                            })
                        }} onKeyUp={() => { trigger("phone") }} />
                    {errors.phone && (<p className='text-danger'>{errors.phone.message}</p>)}
                </div>

                <button type="submit" className="btn btn-warning">Update User</button>
            </form>
        </div>
    )
}
