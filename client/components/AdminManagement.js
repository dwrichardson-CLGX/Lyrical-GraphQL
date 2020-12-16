import React, { Component } from 'react';
import { Link } from 'react-router';

class AdminManagement extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="container">
                  <h1>Manage Application</h1>
                  <div className="row">
                      <div className="col s4">
                            <Link to="/Clients/new">Add Client</Link>
                      </div>
                      <div className="col s4">
                            <Link to="/products/new">Add Product/Integration </Link>
                      </div>
                      <div className="col s4">
                            <Link to="/Clients/new">Add Client</Link>
                      </div>
                  </div>
            </div>
      
        
        );
    }


}

export default AdminManagement;