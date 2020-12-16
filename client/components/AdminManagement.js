import React, { Component } from 'react';
import { Link } from 'react-router';
import query from '../queries/fetchClients';
import { graphql } from 'react-apollo';

class AdminManagement extends Component{
    constructor(props){
        super(props)
    }


    renderTableBody(){
        if(this.props.data.clients !== undefined){
            return this.props.data.clients.map((client) => {
                return (

                    <tr key={client.id}>
                        <td>{ client.Name}</td>
                        <td>{client.PrimaryPlatform}</td>       
                        <td>{ client.ProductIds }</td>                 
                        <td>{client.CorelogicContactName}</td>
                        <td>{ client.ClientContactName}</td>
                        <td><Link to={`clients/${client.id}`}>
                           <i className="material-icons edit">edit</i>
                            </Link></td>
                    </tr>
                );
            });
            }
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
                            <Link to="/products/manage">Manage Products/Integration </Link>
                      </div>
                      <div className="col s4">
                            <Link to="/platforms/manage">Manage Platforms</Link>
                      </div>
                  </div>
                  <div className="col s12">
                    <table className="striped" >
                        <thead>
                            <tr>
                                <th>Client</th>
                                <th>Platform</th>
                                <th>Integrations</th>
                                <th>Primary Contact</th>
                                <th>Last Update</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.renderTableBody() }
                        </tbody>
                    </table>
                  </div>
            </div>
      
        
        );
    }


}

export default graphql(query)(AdminManagement);