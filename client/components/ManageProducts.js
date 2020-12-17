import React, { Component } from 'react';
import { Link } from 'react-router';
import { graphql } from 'react-apollo';
import gql  from 'graphql-tag'


const query = gql ` 
query getProducts {
    products{
        id
      ProductName
      Description
      ProductType
      ContactName 
      ContactEmail 
      ContactPhone  
    }
    
  }
`;


class ManageProduct extends Component{
    constructor(props){
        super(props)
    }


    renderTableBody(){
        if(this.props.data.products !== undefined){
            return this.props.data.products.map((product,i) => {
                return (

                    <tr key={i}> 
                        <td>{product.ProductName}</td>  
                        <td>{product.ProductType == 1 ? 'Integration' : 'Service'}</td>     
                        <td>{ product.ContactName }</td>                 
                        <td>{product.ContactEmail}</td>
                        <td>{ product.Phone}</td>
                        <td><Link to={`products/${product.id}`}>
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
                  <h1>Manage Products</h1>
                  <div className="row">
                   
                      <div className="col s4">
                          <Link to="/products/new">Add Products</Link>
                      </div>
                  </div>
                  <div className="col s12">
                    <table className="striped" >
                        <thead>
                            <tr>
                                <th>Product</th> 
                                <th>ProductType</th> 
                                <th>Primary Contact</th> 
                                <th>Primary Contact Email</th> 
                                <th>Primary Contact Phone</th> 
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

export default graphql(query)(ManageProduct);