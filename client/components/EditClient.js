import React, { Component} from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';

const mutationQuery = gql`
mutation addClient($Name: String,$PrimaryPlatform: String,
    $PrimaryContact: String,
    $CorelogicContactName: String,
    $CorelogicContactEmail: String,
    $CorelogicContactPhone: String,
    $ClientContactName: String,
    $ClientContactEmail: String,
    $ClientContactPhone: String,
    $ClientNotes: String,
    $ClientIdentifier: String ){
      addClient(Name:$Name,PrimaryPlatform: $PrimaryPlatform, PrimaryContact: $PrimaryContact,
    
    CorelogicContactName: $CorelogicContactName,
    CorelogicContactEmail: $CorelogicContactEmail,
    CorelogicContactPhone: $CorelogicContactPhone,
    ClientContactName: $ClientContactName,
    ClientContactEmail: $ClientContactEmail,
    ClientContactPhone: $ClientContactPhone,
    ClientNotes: $ClientNotes
    ClientIdentifier: $ClientIdentifier){
      id
       Name
    }
    }
`;
const getClient = gql`
query getSelectedClient($id: ID){
    client(id: $id) { 
        Name
        PrimaryPlatform
        PrimaryContact
        CorelogicContactName
        CorelogicContactEmail
        CorelogicContactPhone
        ClientContactName
        ClientContactEmail
        ClientContactPhone
        ClientNotes
        ClientIdentifier        
    }
} 
`;

class EditClient extends Component{
    constructor(props){
        super(props);
        console.log(props);
        
        this.state = { 
         
            Name: props.Name || "",
            PrimaryPlatform: "",
            PrimaryContact: "",
            CorelogicContactName: props.CorelogicContactName ||  "",
            CorelogicContactEmail: "",
            CorelogicContactPhone: "",
            ClientContactName: "",
            ClientContactEmail: "",
            ClientContactPhone: "",
            ClientNotes: "",
            ClientIdentifier: ""
          }
    }

    onSubmit(event){
        event.preventDefault(); 
   
        this.props.mutate(
            {
                variables:{
                    Name: this._name.value,
                    PrimaryPlatform:  this.state.PrimaryPlatform,
                    PrimaryContact: this.state.PrimaryContact,
                    CorelogicContactName: this._CorelogicContactEmail.value,// this.state.CorelogicContactName,
                    CorelogicContactEmail: this._CorelogicContactEmail.value,// this.state.CorelogicContactEmail,
                    CorelogicContactPhone: this._CorelogicContactPhone.value,// this.state.CorelogicContactPhone,
                    ClientContactName: this._ClientContactName.value, // this.state.ClientContactName,
                    ClientContactEmail: this._ClientContactEmail.value,// this.state.ClientContactEmail,
                    ClientContactPhone: this._ClientContactPhone.value, // this.state.ClientContactPhone,
                    ClientNotes: this._ClientNotes.value, // this.state.ClientNotes,
                    ClientIdentifier: this._ClientIdentifier.value // this.state.ClientIdentifier
        
                }                
            }).then(() => hashHistory.push('/clients'));
        
      
    }
    render(){
        //console.log(this.props.data);
        if(this.props.data.loading) { return (<div><h1>Loading</h1></div>)};
 
        let optionItems = [];
        return(
            <div className="container">
            <form className="col s12" onSubmit={this.onSubmit.bind(this)}>
      
               
               <div className="row">
                   {/* <div className="browser-default input-field col s6">
                   <select>
                       <option value="0" >Choose your option</option>
                       <option value="1">Option 1</option>
                       <option value="2">Option 2</option>
                       <option value="3">Option 3</option>
                       </select>
                       <label>Materialize Select</label>
                   </div> */}
                   
                   <div className="row">
                       <div className="col s12">
                           <div className="input-field col s4">
                               <input placeholder="Client Name" id="title" type="text" className="validate" 
                                       onChange={event => this.setState({ Name: event.target.value })}
                                       ref={input => this._name = input}
                                       defaultValue={this.props.data.client.Name}
                                   ></input>
                                   <label htmlFor="title" className="active">ClientName</label>
                               </div>
                           </div>
                     
                   </div>
                   <div className="row">
                       <div className="col s12">
                       <div className="input-field col s4">
                           <input placeholder="Corelogic Contact Name" id="CCN" type="text" className="validate" 
                               onChange={event => this.setState({ CorelogicContactName: event.target.value })}
                               defaultValue={this.props.data.client.CorelogicContactName}
                               ref={input => this._CorelogicContactName = input}
                           ></input>
                           <label htmlFor="title" className="active">Corelogic Contact Name</label>
                       </div>
                       <div className="input-field col s4">
                           <input placeholder="Corelogic Contact Email" id="CCE" type="text" 
                           className="validate" onChange={event => 
                               this.setState({ CorelogicContactEmail: event.target.value })}
                               ref={input => this._CorelogicContactEmail = input}
                               defaultValue = {this.props.data.client.CorelogicContactEmail}
                           ></input>
                           <label htmlFor="CCE" className="active">Corelogic Contact Email</label>
                       </div>
                       <div className="input-field col s4">
                       <input placeholder="Corelogic Contact Phone" id="CCE" type="text" 
                       className="validate" onChange={event =>
                            this.setState({ CorelogicContactPhone: event.target.value })}
                            ref={input => this._CorelogicContactPhone = input}
                            defaultValue = {this.props.data.client.CorelogicContactPhone}
                       ></input>
                       <label htmlFor="CCE" className="active">Corelogic Contact Phone</label>
                     </div>
                       </div>
                  
                   </div>

                   <div className="row">
                       <div className="col s12">
                       <div className="input-field col s4">
                           <input placeholder="Client Contact Name" id="CLCN" type="text" className="validate" 
                               onChange={event => this.setState({ ClientContactName: event.target.value })}
                               ref={input => this._ClientContactName = input}
                               defaultValue={this.props.data.client.ClientContactName}
                           ></input>
                           <label htmlFor="title" className="active">Client Contact Name</label>
                       </div>
                       <div className="input-field col s4">
                           <input placeholder="Client Contact Email" id="CLCE" type="text" className="validate" 
                           onChange={event => this.setState({ ClientContactEmail: event.target.value })}
                           defaultValue = {this.props.data.client.ClientContactEmail}
                           ref={input => this._ClientContactEmail = input}
                           ></input>
                           <label htmlFor="CCE" className="active">Client Contact Email</label>
                       </div>
                       <div className="input-field col s4">
                       <input placeholder="Client Contact Phone" id="CLCP" type="text" className="validate"
                        onChange={event => this.setState({ ClientContactPhone: event.target.value })}
                        defaultValue = {this.props.data.client.ClientContactPhone}
                        ref={input => this._ClientContactPhone = input}
                       ></input>
                       <label htmlFor="CLCP" className="active">Client Contact Phone</label>
                     </div>
                   </div>
                   </div>
                   <div className="row">
                       <div className="col s12">
                           <div className="input-field col s12">

                           <textarea id="textarea1" defaultValue={this.props.data.client.ClientNotes} className="materialize-textarea" 
                                  ref={input => this._ClientNotes = input}
                           onChange={event => this.setState({ ClientNotes: event.target.value })}></textarea>
                           <label className="active">Client Notes</label>
                           </div>
                       </div>
                   </div>
                  
               </div>

           <div className="row">
               <div className="col s4"> 
               <select multiple>
                       <option value="" disabled>Choose your option</option>
                       <option value="1">Option 1</option>
                       <option value="2">Option 2</option>
                       <option value="3">Option 3</option>
                       </select>
                       <label>Materialize Multiple Select</label>

               </div>
               <div className="col s4"> 
                      <select multiple>
                        { optionItems }
                      </select> 
                      <label>Products</label>
               </div>
               <div className="input-field col s4"> 
               <input placeholder="Client Unique Identifier" id="CLCP" type="text" className="validate" onChange={event => this.setState({ ClientIdentifier: event.target.value })}
                           value = {this.props.data.ClientIdentifier}
                           ref={input => this._ClientIdentifier = input}
                       ></input>
               </div>
           </div>
           
           <div className="row">
                <input type="button" value="Submit" onClick={this.onSubmit.bind(this)}></input>
           </div>
</form>
</div>
        )
    }
}

export default graphql(mutationQuery)(graphql(getClient, {
    options: (props) => {return { variables: {id: props.params.id}}}
})(EditClient));