import React from 'react';
import { Link } from 'react-router';


export default ({children}) => {
 
    return (
        <div>
       <nav className="nav-bar">
           
        <div className="nav-wrapper">
       <a href="#" className="brand-logo">Logo</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <div>
                <li><Link to="/"  >Search </Link></li>
                <li><Link to="/clients"  >Client List </Link></li>
                <li><Link to="/support"> Support </Link></li>
                <li><Link to="/manage" > Manage </Link></li>
            </div> 
            
        </ul>
        </div> 
    </nav>   
    <div className="container">{ children }</div>
    </div>
    );
      
}