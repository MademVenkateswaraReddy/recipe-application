import React, {useState} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    axios.defaults.withCredentials = true;
    const handleSubmit = (e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/auth/login', {username, password})
    .then(result =>{
        window.localStorage.setItem('id', result.data.id)
        navigate('/')
        console.log(result)
    }
        
    )
    .catch(err => console.log(err))
}


    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <div className='p-3 border border-1 w-25' style={{borderRadius: '10px', borderColor: 'blue'}}>
                <h3 className='text-primary' style={{textAlign: 'center'}}>Login</h3>
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
                    <button className='btn btn-success mt-4 w-100'>Login</button>
                    <p className='mt-4'>New User, register here?</p>
                    <Link to={'/auth/register'}><button className='btn btn-default w-100 border' style={{backgroundColor: 'blue', color: '#eee'}}>Register</button></Link>
                </form>
            </div>            
        </div>
    )
}

export default Login
