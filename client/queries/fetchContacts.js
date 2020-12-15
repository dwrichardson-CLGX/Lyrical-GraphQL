import gql from 'graphql-tag';

export default gql`
 query getContacts {
    contacts{
         Name
        Email
        Phone
        InternalEmail
        InternalContact
    }
  }
`;