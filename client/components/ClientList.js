import React, {Component} from 'react';
import query from '../queries/fetchSongs';
import { graphql } from 'react-apollo';

class ClientList extends Component{
    constructor(props){
        super(props);
    }

    renderTable(){
        if(this.props.data.contacts !== undefined){
            return this.props.data.songs.map((song) => {
                return (

                    <tr key={song.id}>
                        <td>{song.title}</td>
                        <td>{song.artist}</td>
                        <td></td>
                    </tr>
             
                );
            });
            }
    }


    render(){
        return(
            
            <div className="container">
                <h1>Clients</h1>
                <div className="row">
                    <table className="table striped">
                        <tbody>
                            { this.renderTable() }
                        </tbody>
                    </table>
                </div>

            </div>
        ) 
        ;
    }
}


export default graphql(query)(ClientList);