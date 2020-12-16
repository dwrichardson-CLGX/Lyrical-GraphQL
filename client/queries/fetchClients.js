import gql from 'graphql-tag';

export default gql`
query findClients{
    clients
    {
       id 
       Name
       PrimaryPlatform
       PrimaryContact
       CorelogicContactName
       ClientContactName
       ClientIdentifier
       Products{
           ProductName
       }
    }
  }
`;