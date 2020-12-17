import React, { Component } from 'react';
import { Link } from 'react-router';
import { graphql } from 'react-apollo';
import gql  from 'graphql-tag';

const query = gql `
query getPlatforms{
    platforms
    {
        id
        Name 
        Links 
        Description 
        ContactName 
        ContactEmail 
        ContactPhone  
        PlatformNotes 
    }
}
`;


class ManagePlatform extends Component{
    constructor(props){
        super(props)
    }



    renderTableBody(){
        if(this.props.data.platforms !== undefined){
            return this.props.data.platforms.map((platform,i) => {
                return (

                    <tr key={i}> 
                        <td>{platform.Name}</td>       
                        <td>{ platform.ContactName }</td>                 
                        <td>{platform.ContactEmail}</td>
                        <td>{ platform.Links}</td>
                        <td><Link to={`platforms/${platform.id}`}>
                           <i className="material-icons edit">edit</i>
                            </Link></td>
                    </tr>
                );
            });
            }
    }


    render(){
        console.log('rendered Page')
        window.location.reload(false);
        return(
            <div className="container">
                  <h1>Manage Platforms</h1>
                  <div className="row">
                   
                      <div className="col s4">
                            <Link to="/platforms/new">Add Platform</Link>
                      </div>
                  </div>
                  <div className="col s12">
                    <table className="striped" >
                        <thead>
                            <tr>
                                <th>Platform</th>
                                <th>Primary Contact</th>
                                <th>Email</th>
                                <th>Links</th> 
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

export default graphql(query)(ManagePlatform);