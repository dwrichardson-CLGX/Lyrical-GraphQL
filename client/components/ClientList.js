import React, {Component} from 'react';
import query from '../queries/fetchClients';
import { graphql } from 'react-apollo';
import {Link} from 'react-router';

class ClientList extends Component{
    constructor(props){
        super(props);
    }

    renderTable(){
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
                <h1>Clients</h1>
                <div className="row">
                    <table className="table striped">
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
                            { this.renderTable() }
                        </tbody>
                    </table>
                </div>

            </div>
        ) 
        ;
    }
}


export default graphql(query)(ClientList);