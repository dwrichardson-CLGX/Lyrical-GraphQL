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
import AddClient from './components/AddClient';
import EditClient from './components/EditClient';
import AddProduct from  './components/AddProduct';
import AddPlatform from './components/AddPlatform';
import ManagePlatform from './components/ManagePlatforms';
import ManageProduct from  './components/ManageProducts';
import EditProduct from    './components/EditProduct';

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
              <Route path="clients/new" component={AddClient} />
              <Route path="clients/:id" component={EditClient} />
               <Route path="products/new" component={AddProduct} />
               <Route path="platforms/new" component={AddPlatform} />
               <Route path="platforms/manage" component={ManagePlatform} />
               <Route path="products/manage" component={ManageProduct} />
               <Route path="products/:id" component={EditProduct} />
               {/* 
               <Route path="platforms/:id" component={EditPlatform} /> */}
               
          </Route>
       </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root'),
);
