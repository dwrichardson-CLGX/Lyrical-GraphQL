import React, { Component} from 'react';
import { hashHistory, Link } from 'react-router';
import M from 'materialize-css';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';



const addPlatformMutation = gql`
mutation addPlatform( 
    $Name: String,
    $Description: String,
    $Links: String,
    $ContactName: String,
    $ContactEmail: String,
    $ContactPhone: String,  
    $PlatformNotes: String){
        addPlatform(    
     Name: $Name,
    Description: $Description
    Links: $Links,
    ContactName: $ContactName,
    ContactEmail: $ContactEmail,
    ContactPhone: $ContactPhone, 
    PlatformNotes: $PlatformNotes)
    {
       id
       Name
       Description
       Links
       ContactName
       ContactEmail
    }
  }


`;
class AddPlatform extends Component{
    constructor(props){
        super(props);

        this.state =  { };
    }

    init(){
        console.log(this.props.data);
        M.AutoInit();
    }

    onSubmit(event){
        event.preventDefault();

        console.log(event);
        this.props.mutate(
            {
                variables:{
                     Name: this.state.Name, 
                    Links: this.state.Links,
                     Description: this.state.Description ,
                      ContactName: this.state.ContactName,
                      ContactEmail: this.state.ContactEmail,
                      ContactPhone: this.state.ContactPhone, 
                       PlatformNotes: this.state.PlatformNotes
        
                }                
            }).then(() => hashHistory.push('/manage'));

    }

    render()
    {

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
                                   <input placeholder="Product/Integration Name" id="pintname" type="text" className="validate" 
                                           onChange={event => this.setState({ Name: event.target.value })}
                                           value={this.state.Name}
                                       ></input>
                                       <label htmlFor="pintname" className="active">Platform Name</label>
                                </div>

                           
                               </div>
                           
                         
                       </div>

    
                       <div className="row">
                           <div className="col s12">
                               <div className="input-field col s12">

                               <textarea id="textarea1" className="materialize-textarea" 
                               onChange={event => this.setState({ Description: event.target.value })}
                                value={this.state.Description}

                               ></textarea>
                               <label className="active">Description</label>
                               </div>
                           </div>
                       </div>
                 
                       <div className="row">
                           <div className="col s12">
                           <div className="input-field col s4">
                               <input placeholder="Platform Owner Name" id="PON" type="text" className="validate" 
                                   onChange={event => this.setState({ ContactName: event.target.value })}
                                   value={this.state.ContactName}
                               ></input>
                               <label htmlFor="PON" className="active">Platform Owner Name</label>
                           </div>
                           <div className="input-field col s4">
                               <input placeholder="Platform Owner Email" id="CCE" type="text" 
                               className="validate" onChange={event => 
                                   this.setState({ ContactEmail: event.target.value })}
                                   value = {this.state.ContactEmail}
                               ></input>
                               <label htmlFor="CCE" className="active">Product Owner Email</label>
                           </div>
                           <div className="input-field col s4">
                           <input placeholder="Platform Owner Phone" id="POP" type="text" 
                           className="validate" onChange={event =>
                                this.setState({ ContactPhone: event.target.value })}
                               value = {this.state.ContactPhone}
                           ></input>
                           <label htmlFor="POP" className="active">Platform Owner Phone</label>
                         </div>
                           </div>
                      
                       </div> 
                    
                     <div className="input-field col s12">
                            <input placeholder="Documentation Link" id="docLink" className="validate" value={this.state.Links} onChange={event => this.setState({ Links: event.target.value})} />
                            <label htmlFor="docLink" className="active">Documentation Link</label>
                     </div>
                      
                     <div className="col s12">
                               <div className="input-field col s12">

                               <textarea id="textarea1" className="materialize-textarea" 
                               value={this.state.PlatformNotes}
                               onChange={event => this.setState({ PlatformNotes: event.target.value })}></textarea>
                               <label className="active">Support Links</label>
                               </div>
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


export default graphql(addPlatformMutation)(AddPlatform);