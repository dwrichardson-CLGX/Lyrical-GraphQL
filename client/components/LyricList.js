import React,{ Component } from 'react';
import   likeLyric   from '../queries/likeLyric'; 
import { graphql } from 'react-apollo';

class LyricList extends Component{

onLike(id, likes){

    //the optimistic Response  is defined based on the response that you see in the network tab request log
        this.props.mutate({
            variables:{ id },
            optimisticResponse:{
                __typeName: 'Mutation',
                likeLyric:{
                    id: id,
                    __typeName: 'LyricType',
                    likes: likes + 1
            
                }
            }
            });
}

renderLyrics() {

  
    return this.props.lyrics.map((lyric,i) => {
        return(
          
                <li key={lyric.id} className="collection-item">
                    {lyric.content}
                   <div className="vote-box" >
                    <i className="material-icons"
                    onClick ={() => this.onLike(lyric.id,lyric.likes)}
                    >thumb_up</i> 
                        {lyric.likes}
                     </div>
                </li>
           
       
        );
    });

}
    render(){
        return( 
            <ul className="collection">
                { this.renderLyrics() }
            </ul>
        );
    }
}

export default graphql(likeLyric)(LyricList);