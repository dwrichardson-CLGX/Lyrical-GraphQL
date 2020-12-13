import gql from 'graphql-tag';

export default gql`
query getSelectedSong($id: ID!){
    song(id: $id) { 
        id
        title
        artist
        lyrics {
            id
            content
            likes
        }
    }
} 
`;