import React , {Component} from 'react';
import { Router, Route, hashHistory, IndexRoute, Link } from "react-router";
import addLyricToSong from '../queries/addLyricToSong';
import {graphql} from 'react-apollo';

class LyricCreate extends Component{


//React router only passes down route parameters to the first component that it renders
//to get songid we need to pass it down from the songdetail component to the LyricCreate component
    constructor(props){
        super(props);
        console.log(props);
        this.state = { content: '' };
    }

    onSubmit(event){
        event.preventDefault();
        console.log(event);
          this.props.mutate({
            variables:{
                content: this.state.content,
                songId: this.props.songId
            }//,
             //refetchQueries:[{ query: fetchSongsQuery , variables: variables}] takes parameters query and variables
              //  refetchQueries: [{ query: fetchSongsQuery }] 
        }); //.then(() => { this.setState({content: ''})} );

    }

   render(){

       console.log(this);
       return(
           <form onSubmit={this.onSubmit.bind(this)}>
            <label>Add a Lyric</label>
             <input 
                value = {this.state.content}
                onChange={event => this.setState({ content: event.target.value })}
             />
           </form>
       );
   } 
}

export default graphql(addLyricToSong)(LyricCreate);