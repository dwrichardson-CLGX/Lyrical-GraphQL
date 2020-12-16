import React, { Component } from 'react';
import gql from  'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/fetchSongs'
import deleteQuery from '../queries/deleteSongs';

class SongList extends Component {

    constructor(props){
        super(props);
    }

    onSelectSong(id){
        console.log(id);
    }

    onSongDelete(id){
        this.props.mutate({
            variables:{
                id
            }
            //,refetchQueries: [{ query }]
             
        })  //this.props.data.refetch is alternative to calling refetchquereis 
        .then(() => this.props.data.refetch()); 
      
    } 

    renderSongs(){
        if(this.props.data.songs !== undefined){
        return this.props.data.songs.map((song) => {
            return (
                <li key={song.id} className="collection-item">
                    {/*       <i className="material-icons left" onClick={() => onSelectSong(song.id) }>edit</i> */}
                    
                    {/* alternative setup for link tag without using pathname
                    <Link to={`/songs/${song.id}`}>
                        {song.title} 
                    </Link>
                    */}
                    <Link to={{ pathname: `songs/${song.id}`}}>
                       {song.title} {song.artist}
                    </Link>
                    <icon className="material-icons delete" 
                    onClick={() => this.onSongDelete(song.id)}>delete</icon>
                </li>
              
            );
        });
        }
    }
render(){

    return(
        <div className="row">
        
         <div className="browser-default input-field col s6">
          <select id=""> 
                <option value="0" >Choose your option</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
           </select>
             <label>Search By Company</label>
         </div>
         <div className="browser-default input-field col s6">
          <select id=""> 
                <option value="0" >Choose your option</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
           </select>
             <label>Search By Product</label>
         </div>
         <div className="browser-default input-field col s6">
          <select id=""> 
                <option value="0" >Choose your option</option>
                <option value="1">Digital Gateway</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
           </select>
             <label>Search By Company</label>
         </div>
        </div>
    )
}

    // render(){
    //     if(this.props.data.loading) { return (<div><h1>Loading</h1></div>)};

    //     return(
    //     <div className="row">
    //         <ul className="collection">
    //             { this.renderSongs() }
    //         </ul>
    //         <Link to="/songs/new"
    //          className="btn-floating btn-large red right"
    //         >
    //            <i className="material-icons">add</i>
    //         </Link>
    //          <a className="btn-floating btn-large waves-effect waves-light red right" href="#songs/new"><i className="material-icons">add</i></a>
    //     </div>
    //     )
    // }
}
 
const findSongQuery = gql`
query getSelectedSong($id: ID){
    song(id: $id) { 
        title
        artist
    }
} 
`;
 
export default graphql(deleteQuery)(
    graphql(query)(SongList));