import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import productQuery from '../queries/fetchProducts';
import clientQuery from '../queries/fetchClients';
import M from 'materialize-css';
import gql from 'graphql-tag';
import { hashHistory} from 'react-router';

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

class AddClient extends Component{
    constructor(props){
        super(props)

        this.state = { 
         
        Name: "",
        PrimaryPlatform: "",
        PrimaryContact: "",
        CorelogicContactName: "",
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
                    Name: this.state.Name,
                    PrimaryPlatform: this.state.PrimaryPlatform,
                    PrimaryContact: this.state.PrimaryContact,
                    CorelogicContactName: this.state.CorelogicContactName,
                    CorelogicContactEmail: this.state.CorelogicContactEmail,
                    CorelogicContactPhone: this.state.CorelogicContactPhone,
                    ClientContactName: this.state.ClientContactName,
                    ClientContactEmail: this.state.ClientContactEmail,
                    ClientContactPhone: this.state.ClientContactPhone,
                    ClientNotes: this.state.ClientNotes,
                    ClientIdentifier: this.state.ClientIdentifier
        
                }                
            }).then(() => hashHistory.push('/clients'));
        
      
    }

     init(){
         
         if(!this.props.data.loading){
            console.log('init');
             M.AutoInit();

         }
     }

    renderProducts(){
 
        if(this.props.data.loading) { return(<option></option>)}


    //    return(
    //      <select>
    //     {this.props.data.findIntegrationProducts.map((product,i) => (
    //       <option key={product.id} value={product.id}>
    //         {product.ProductName}
    //       </option>
    //     ))}
    //   </select>) ;
    
          return ( 
            this.props.data.findIntegrationProducts.map((product,i) =>( 
                <option key={i} value={product.id}>{product.ProductName}</option>
            )
          ));  
            
       
    }

      

    render(){

      if(this.props.data.loading) { return(<div></div>)  }
        //let optionItems = [];
        let optionItems = this.props.data.findIntegrationProducts.map((product) =>
        <option key={product.id}>{product.ProductName}</option>
        );
       
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
                                                        value={this.state.title}
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
                                                value={this.state.CorelogicContactName}
                                            ></input>
                                            <label htmlFor="title" className="active">Corelogic Contact Name</label>
                                        </div>
                                        <div className="input-field col s4">
                                            <input placeholder="Corelogic Contact Email" id="CCE" type="text" 
                                            className="validate" onChange={event => 
                                                this.setState({ CorelogicContactEmail: event.target.value })}
                                                value = {this.state.CorelogicContactEmail}
                                            ></input>
                                            <label htmlFor="CCE" className="active">Corelogic Contact Email</label>
                                        </div>
                                        <div className="input-field col s4">
                                        <input placeholder="Corelogic Contact Phone" id="CCE" type="text" 
                                        className="validate" onChange={event =>
                                             this.setState({ CorelogicContactPhone: event.target.value })}
                                            value = {this.state.CorelogicContactPhone}
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
                                                value={this.state.ClientContactName}
                                            ></input>
                                            <label htmlFor="title" className="active">Client Contact Name</label>
                                        </div>
                                        <div className="input-field col s4">
                                            <input placeholder="Client Contact Email" id="CLCE" type="text" className="validate" 
                                            onChange={event => this.setState({ ClientContactEmail: event.target.value })}
                                                value = {this.state.ClientContactEmail}
                                            ></input>
                                            <label htmlFor="CCE" className="active">Client Contact Email</label>
                                        </div>
                                        <div className="input-field col s4">
                                        <input placeholder="Client Contact Phone" id="CLCP" type="text" className="validate"
                                         onChange={event => this.setState({ ClientContactPhone: event.target.value })}
                                            value = {this.state.ClientContactPhone}
                                        ></input>
                                        <label htmlFor="CLCP" className="active">Client Contact Phone</label>
                                      </div>
                                    </div>
                                    </div>
                                    <div className="row">
                                        <div className="col s12">
                                            <div className="input-field col s12">

                                            <textarea id="textarea1" className="materialize-textarea" onChange={event => this.setState({ ClientNotes: event.target.value })}></textarea>
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
                                            value = {this.state.ClientIdentifier}
                                        ></input>
                                </div>
                            </div>
                            
                            <div className="row">
                                 <input type="button" value="Submit" onClick={this.onSubmit.bind(this)}></input>
                            </div>
                </form>
                {this.init()}
            </div>
            

        )
    }
}

export default graphql(mutationQuery)(
    graphql(productQuery)(AddClient));