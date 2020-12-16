import gql from 'graphql-tag';

export default gql`
query findProductsByType($ProductType: Int){
    findIntegrationProducts(ProductType: $ProductType)
    {
       id 
       ProductName
    }
  }
`;