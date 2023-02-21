import React,{useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import axios from 'axios';

const Login = () => {
const navigate = useNavigate()
const [token, setToken] = useState(localStorage.getItem('userToken' ?? null))
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [isErrorMessage, setIsErrorMessage] = useState(false);
const errorMessage = 'Username or Password is incorrect';

const handleClick = async () => {
    if(username.trim().length === 0  && password.trim().length === 0){
        setIsErrorMessage(true);
        return;
    } else {
    try {
    const response = await axios.post('https://fakestoreapi.com/auth/login',{
        username: username,
        password: password,
    })
    setToken(response.data)
    localStorage.setItem('userToken', response.data.token)
        if(response.data && token) {
         navigate('/search')
        }
    } catch (error) { 
        console.log(error)
    }
 }}
    
  return (
    <div>
        <Navbar loading={true}/>
        <div name='login' className='container mt-5'>
            <h1 className="display-1" >Login</h1> 
            {(username == '' && password == '') ? 
                <p style={{color:'orange',display:'block'}}>Please log in to access your page</p>
                :
                <p style={{color:'orange',display:'none'}}>Please log in to access your page</p>
            }
            <form>
                <div className="form-group row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label mr-3 mt-2">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control mb-3 mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Email here.." value={username} onChange={e => setUsername(e.target.value)} />                
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label mr-3">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                </div>
                {isErrorMessage && <span className='mt-3' style={{color:'red'}}>{errorMessage}</span>}
            </form>
            <button type='submit' onClick={handleClick} className="btn btn-dark mt-3 mx-end mb-5">Login</button>
        </div>
    </div>
  )
}

export default Login