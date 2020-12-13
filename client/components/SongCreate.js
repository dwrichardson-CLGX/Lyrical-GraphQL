import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRoute, Link } from "react-router";
import  gql  from 'graphql-tag';
import { graphql} from 'react-apollo';
import fetchSongsQuery from '../queries/fetchSongs';


class SongCreate extends Component {
    constructor(props){
        super(props);

        this.state = { title: '', artist: ''}
    }

    onSubmit(event){
           console.log(this.props);
        event.preventDefault();
     
        this.props.mutate({
            variables:{
                title: this.state.title,
                artist: this.state.artist
            },
             //refetchQueries:[{ query: fetchSongsQuery , variables: variables}] takes parameters query and variables
                refetchQueries: [{ query: fetchSongsQuery }]
             
        }).then(() => hashHistory.push('/'));   //on success navigate back to first page
        //.catch(() => ) //on exception do something
    }


    render(){
        return (
          
            <div className="row">
              <Link to="/">Back</Link>
                <form className="col s12" onSubmit={this.onSubmit.bind(this)}>
                    <div className="row">
                      <div className="input-field col s12">
                        <input placeholder="Title" id="title" type="text" className="validate" onChange={event => this.setState({ title: event.target.value })}
                            value={this.state.title}
                         ></input>
                        <label htmlFor="title" className="active">Title</label>
                      </div>
                      <div className="input-field col s12">
                        <input placeholder="Artist" id="artist" type="text" className="validate" onChange={event => this.setState({ artist: event.target.value })}
                            value = {this.state.artist}
                         ></input>
                        <label htmlFor="artist" className="active">Artist</label>
                      </div>
                    </div>
                   <div className="row">
                        <input type="button" value="Submit" onClick={this.onSubmit.bind(this)}></input>
                   </div>
                </form>
             
            </div>
        );
    }
}

const mutation = gql`
    mutation addSongMutation($title: String! , $artist: String!){
        addSong(title: $title , artist: $artist){
            id
            title
        } 
    } 
`;

export default  graphql(mutation)(SongCreate);