import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';

export default function AddUsers() {
  let navigate = useNavigate();
  // const [user, setUser] = useState({
  //   name: "",
  //   username: "",
  //   email: "",
  //   phone: ""
  // });
  // const { name, username, email, phone } = user;
  //--------------------handling change------------------
  // const handleChange = (e) => {
  //   let { name, value, type } = e.target;
  //   setUser({ ...user, [name]: value });
  // };

  const { register, handleSubmit, formState: { errors }, trigger } = useForm();
  //---------------handle submit---------------------
  const inputSubmit = async (data, event) => {
    //  e.preventDefault();
    const result = {
      "name": data.name,
      "username": data.username,
      "email": data.email,
      "phone": data.phone
    }
    console.log(result);
    await axios.post("http://localhost:3000/data", result);
    navigate("/");

  };
  //console.log(errors)

  //--------------------------------------
  return (
    <div className='container py-3'>
      <h2 data-testid='userHead'>Add User</h2>
      <form onSubmit={handleSubmit(inputSubmit)}>
        <div className="mb-3 my-4">
          <label htmlFor="name" className={`form-label ${errors.name && ("err")}`} data-testid='addName' >Name</label>
          <input type="text" className={`form-control ${errors.name && ("invalid")}`} id="name" name='name'
            placeholder='Enter Name'
            {...register("name", {
              required: 'Name is required',
              maxLength: { value: 20, message: "Name Cannot be more than 20 characters" },
              minLength: { value: 0, message: "Name must be more than 4 characters" },
              pattern: { value: /^[a-zA-z]+([\s][a-zA-Z]+)*$/, message: "Name must be characters only" }
            })}
            onKeyUp={() => { trigger("name") }} />
          {errors.name && (<p className='text-danger'>{errors.name.message}</p>)}

        </div>

        <div className="mb-3">
          <label htmlFor="email" className={`form-label ${errors.email && ("err")}`} data-testid='addEmail'>Email address</label>
          <input type="email" className={`form-control ${errors.email && ("invalid")}`} id="email" name='email' aria-describedby="emailHelp"
            placeholder='Enter Email'
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/, message: "invalid email address" }
            })}
            onKeyUp={() => { trigger("email") }} />
          <div id="emailHelp" className={`form-text ${errors.name && ("hide")}`}>We'll never share your email with anyone else.</div>
          {errors.email && (<p className='text-danger'>{errors.email.message}</p>)}

        </div>

        <div className="mb-3">
          <label htmlFor="username" className={`form-label ${errors.username && ("err")}`} data-testid='addUserName'>User Name</label>
          <input type="text" className={`form-control ${errors.username && "invalid"}`} id="username" name='username'
            placeholder='Enter UserName'
            {...register('username', {
              required: 'username is required',
              pattern: { value: /^[A-Za-z0-9]+$/, message: "invalid username" }
            })} onKeyUp={() => { trigger("username") }} />

          {errors.username && (<p className='text-danger'>{errors.username.message}</p>)}

        </div>

        <div className="mb-3">
          <label htmlFor="phone" className={`form-label ${errors.phone && ("err")}`} data-testid='addMobile'>Mobile Nmber</label>
          <input type="text" className={`form-control ${errors.phone && "invalid"}`} id="phone" name='phone'
            placeholder='Enter Number'
            {...register("phone", {
              required: 'Mobile Number is required', maxLength: { value: 10, message: 'Mobile Number Cannot be more than 10 Numbers' },
              minLength: { value: 10, message: 'Mobile number should be 10 numbers' },
              pattern: {
                value: /^[0-9]+$/, message: "invalid mobile number"
              }
            })} onKeyUp={() => { trigger("phone") }} />
          {errors.phone && (<p className='text-danger'>{errors.phone.message}</p>)}
        </div>

        <button type="submit" className="btn btn-primary" data-testid='addUserBtn'>Add User</button>
      </form>
    </div>
  )
}
