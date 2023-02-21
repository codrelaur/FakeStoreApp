import React, {useState }from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
    const handleClick = () => localStorage.removeItem('userToken')
   
    return (
      <div className="container">
        <nav className=' mb-5 navbar navbar-light bg-light justify content between fixed-top'>
          <div className='col-sm-8 text-start my-auto mx-auto'>
            <a href='#' >
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207'
                    className='reactLogo'
                    width='50px'
                    alt='Logo'/>
            </a>
          </div>
          <div className='col-xs-2 text-end my-auto mx-auto'>
            <Link to='/'>
                <button type="button"  onClick={handleClick} className="btn btn-light mx-2">Home</button>
            </Link>
            <Link to='/Search'>
                <button type="button"  onClick={handleClick} className="btn btn-light mx-2">Search</button>
            </Link>
            
            <Link to='/Login'>
                {props.loading ? 
                <button type="button"  className="btn btn-primary mx-2">Login</button>
                :
                <button type="button" onClick={handleClick} className="btn btn-dark mx-2">Logout</button>
                }
            </Link>
          </div>
        </nav>
    </div>
    )
}