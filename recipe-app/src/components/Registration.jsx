import React, { useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, useNavigate } from 'react-router-dom'


function Registration() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

const handleSubmit = (e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/auth/register', {username, password})
    .then(result =>{
        navigate('/')
        console.log(result)
    }
        
    )
    .catch(err => console.log(err))
}

    return (
        <div className='container d-flex justify-content-center align-items-center vh-100'>
            <div className='p-3 border border-1 w-25'>
                <h3 className='text-danger' style={{textAlign: 'center'}}>Register</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='username'>Username</label>
                        <input type='text' className='form-control' style={{border: 'none', backgroundColor: '#999'}} placeholder='Enter Username'
                        onChange={(e)=>setUsername(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input type='text' className='form-control' style={{border: 'none', backgroundColor: '#999'}} placeholder='Enter Password'
                        onChange={(e)=>setPassword(e.target.value)} />
                    </div>
                    <button className='btn btn-success mt-4 w-100'>Submit</button>
                    <p className='mt-4'>Already registered?</p>
                    <Link to={'/auth/login'}><button className='btn btn-default w-100 border' style={{backgroundColor: 'blue', color: '#eee'}}>Login</button></Link>
                </form>
            </div>
            
        </div>
    )
}

export default Registration
