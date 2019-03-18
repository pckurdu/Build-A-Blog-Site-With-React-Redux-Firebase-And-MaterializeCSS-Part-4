import React from 'react';
//to perform routing
import {NavLink} from 'react-router-dom';

const SignInLinks=()=>{
    return(
        // links to the right
        <ul className="right">
           <li><NavLink to='/create'>New Project</NavLink></li>
           <li><NavLink to='/'>Log Out</NavLink></li>
           <li><NavLink to='/' className="btn btn-floating red">PK</NavLink></li>
        </ul>
    )
}

export default SignInLinks