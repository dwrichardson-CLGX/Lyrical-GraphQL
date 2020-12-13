import React, { Component } from 'react';
import fetchSong from '../queries/fetchSongById';
import { graphql} from 'react-apollo';
import { Link } from 'react-router';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

class SongDetail extends Component{
    constructor(props){
        super(props);
    }

    render(){
       
       if(this.props.data.loading) { return (<div><h1>Loading</h1></div>)};
 
        if(this.props.data.song === undefined)  { return (<div><h1>Error Loading</h1></div>)};
       return( 
        <div>
         <Link to="/">Back</Link>
            <h3>Song Detail</h3>

                 <form className="col s12">
                    <div className="row">
                      <div className="input-field col s12">
                        <input placeholder="Title" id="title" type="text" className="validate" onChange={event => this.setState({ title: event.target.value })}
                            value={this.props.data.song.title}
                         ></input>
                        <label htmlFor="title" className="active">Title</label>
                      </div>
                      <div className="input-field col s12">
                        <input placeholder="Artist" id="artist" type="text" className="validate" onChange={event => this.setState({ artist: event.target.value })}
                            value = {this.props.data.song.artist}
                         ></input>
                        <label htmlFor="artist" className="active">Artist</label>
                      </div>
                    </div>
                   
                </form> 
                <LyricList lyrics={this.props.data.song.lyrics } />
                <LyricCreate songId={this.props.params.id} /> 

        </div>);
         
    }
}

export default  graphql(fetchSong, {
    //take the props intended to go to the component and provide it to the query
    options: (props) => {return { variables: {id: props.params.id}}}
})(SongDetail);