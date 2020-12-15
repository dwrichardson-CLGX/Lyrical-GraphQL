import './style/style.css'; 
import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from  'react-apollo';
import SongList from './components/SongList';
import App from './components/App';
import SongCreate from './components/SongCreate';
import SongDetail from './components/SongDetail';
import AdminManagement from './components/AdminManagement';
import Support from './components/Support';
import ClientList from './components/ClientList';


import { Router, Route, hashHistory, IndexRoute } from "react-router";

const client = new ApolloClient({
      dataIdFromObject: o => o.id
});

const Root = () => {
  return( 
    <ApolloProvider client={client}>
       <Router history={hashHistory}>
          <Route path="/" component={App}>
              <IndexRoute component={SongList} />
              <Route path="songs/new" component={SongCreate} /> 
              <Route path="songs/:id" component={SongDetail} />
              <Route path="manage" component={AdminManagement} />
              <Route path="support"  component={Support}  />
              <Route path="clients" component={ClientList} />
          </Route>
       </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
