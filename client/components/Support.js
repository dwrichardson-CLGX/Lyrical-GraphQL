import React, { Component } from 'react';
import query from '../queries/fetchContacts';
import { graphql } from 'react-apollo';

class Support extends Component{
    
    renderDivs(){
        if(this.props.data.loading) { return (<div><h1>Loading</h1></div>)};

        return this.props.data.contacts.map((contact) => {
            return(
            
                <div key={contact.id} className="col s6">
                    <ul key={contact.id}>
                      <li>{contact.Name}</li>
                      <li><a href="">{contact.Email}</a></li>
                      <li> {contact.Phone} </li>
                      <li> {contact.InternalContact} </li>
                      <li> {contact.InternalEmail} </li>
                    </ul>
                </div>
            )

        });
      
    }

    render(){
        return(
            <div className="container">
                 
                <div className="col s12">
                    <div className="row">
                        {this.renderDivs()}
                    </div>
                </div>
            </div>
            
            
        )
    }
}

export default  graphql(query)(Support);