import React, { Component } from 'react';
import gql from  'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
//import query from '../queries/fetchSongs'
import deleteQuery from '../queries/deleteSongs';
import M from 'materialize-css';
import query from '../queries/fetchClients';
class SongList extends Component {

    constructor(props){
        super(props);

        this.state ={
            showResults: false,
            curTime : new Date().toLocaleString()
        }
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


    init(){
         
        if(!this.props.data.loading){
           console.log('init');
            M.AutoInit();

        }
    }


    renderTable(){
        if(this.props.data.clients !== undefined){
            return this.props.data.clients.map((client,i ) => {
                return (

                    <tr key={client.id}>
                    <td>{ client.Name}</td>
                    <td>{client.PrimaryPlatform}</td>       
                    <td>{ (i % 2 == 0 ? 'Digital Gateway': 'CDNA') }</td>                 
                    <td>{client.CorelogicContactName}</td>
                    <td>{ this.state.curTime }</td>
                  
                    </tr>
                );
            });
            }
    }

render(){

    return(
        <div className="container"> 
        <div className="row">
         <div className="input-field col s6">
          <select id=""> 
                <option value="0" >Choose your Platform</option>
                <option value="1">CMS.NET</option>
                <option value="2">Legacy</option>
                <option value="3">Mercury</option>
                <option value="4">Appraisal Scope</option>
           </select>
             <label className="active">Search By Platform</label>
         </div>
         <div className="browser-default input-field col s6">
          <select id=""> 
                <option value="0" >Choose your Integration</option>
                <option value="1">Digital Gateway</option>
                <option value="2">CDNA</option>
                <option value="3">House Canary</option>
           </select>
             <label className="active">Search By Integration</label>
         </div>
         <div className="row">
         <div className="col s12 right">
            <button onClick={event => this.setState({showResults: !this.state.showResults})} >Search</button>
         </div>
         </div>


         <div className="col s12" id="SearchResults" style={this.state.showResults ? {} : {display:'none'}}>
         
                    <table className="table striped">
                    <thead>
                            <tr>
                                <th>Client</th>
                                <th>Platform</th>
                                <th>Integrations</th>
                                <th>Primary Contact</th>
                                <th>Last Update</th>
                                 
                            </tr>
                        </thead>
                        <tbody>
                            { this.renderTable() }
                        </tbody>
                    </table>
                 
         </div>
         {this.init()}

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