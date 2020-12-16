import React, { Component} from 'react';
import { hashHistory, Link } from 'react-router';
import M from 'materialize-css';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';



const addProductMutation = gql`
mutation addProduct( 
    $ProductName: String,
    $Description: String,
    $Links: String,
    $ContactName: String,
    $ContactEmail: String,
    $ContactPhone: String, 
    $ProductType: Int,
    $ProductNotes: String){
        addProduct(    
    ProductName: $ProductName,
    Description: $Description
    Links: $Links,
    ContactName: $ContactName,
    ContactEmail: $ContactEmail,
    ContactPhone: $ContactPhone,
    ProductType: $ProductType
    ProductNotes: $ProductNotes)
    {
       id
       ProductName
       Description
       Links
       ContactName
       ContactEmail
    }
    }

`;
class AddProduct extends Component{
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
                    ProductName: this.state.ProductName, 
                    Links: this.state.Links,
                     Description: this.state.Description ,
                      ContactName: this.state.ContactName,
                      ContactEmail: this.state.ContactEmail,
                      ContactPhone: this.state.ContactPhone,
                       IsFlagged: false, 
                       ProductType: this.state.ProductType || 0, 
                       ProductNotes: this.state.ProductNotes
        
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
                                           onChange={event => this.setState({ ProductName: event.target.value })}
                                           value={this.state.ProductName}
                                       ></input>
                                       <label htmlFor="pintname" className="active">Product/Integration Name</label>
                                </div>

                                <div className="col s2">
                                <p>
                                    <label htmlFor="rbProduct">
                                        <input className="with-gap" id="rbProduct"  name="group3" type="radio"  />
                                        <span>Product</span>
                                    </label>
                                </p>
                                     
                               </div>
                               <div className="col s2">
                               <p>
                                    <label htmlFor="rbIntegration">
                                    <input className="with-gap"  id="rbIntegration" name="group3" type="radio"  />
                                    <span>Integration</span>
                                    </label>
                                </p>
                                     
                               </div>

                             
                            </div>
                           
                         
                       </div>

    
                       <div className="row">
                           <div className="col s12">
                               <div className="input-field col s12">

                               <textarea id="textarea1" className="materialize-textarea" onChange={event => this.setState({ Description: event.target.value })}></textarea>
                               <label className="active">Description</label>
                               </div>
                           </div>
                       </div>
                 
                       <div className="row">
                           <div className="col s12">
                           <div className="input-field col s4">
                               <input placeholder="Product Owner Name" id="PON" type="text" className="validate" 
                                   onChange={event => this.setState({ ContactName: event.target.value })}
                                   value={this.state.ContactName}
                               ></input>
                               <label htmlFor="PON" className="active">Product Owner Name</label>
                           </div>
                           <div className="input-field col s4">
                               <input placeholder="Product Owner Email" id="CCE" type="text" 
                               className="validate" onChange={event => 
                                   this.setState({ ContactEmail: event.target.value })}
                                   value = {this.state.ContactEmail}
                               ></input>
                               <label htmlFor="CCE" className="active">Product Owner Email</label>
                           </div>
                           <div className="input-field col s4">
                           <input placeholder="Product Owner Phone" id="POP" type="text" 
                           className="validate" onChange={event =>
                                this.setState({ ContactPhone: event.target.value })}
                               value = {this.state.ContactPhone}
                           ></input>
                           <label htmlFor="POP" className="active">Product Owner Phone</label>
                         </div>
                           </div>
                      
                       </div> 
                    
                     <div className="input-field col s12">
                            <input placeholder="Documentation Link" id="docLink" className="validate" value={this.state.Links} onChange={event => this.setState({ Links: event.target.value})} />
                            <label htmlFor="docLink" className="active">Documentation Link</label>
                     </div>
                      
                     <div className="col s12">
                               <div className="input-field col s12">

                               <textarea id="textarea1" className="materialize-textarea" onChange={event => this.setState({ ProductNotes: event.target.value })}></textarea>
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


export default graphql(addProductMutation)(AddProduct);