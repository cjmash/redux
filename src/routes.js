import React from 'react';
import { Route, IndexRoute,Router } from 'react-router';
import App from './App';
import LoginPage from './components/loginForm';
import bucketPage from './components/bucketpage';
import RegisterPage from './components/register';
import Navigator from './components/Navbar'
import ItemsPage from './components/items'
export default(
  <Router>
    <Route path="/" component = { Navigator }/>
      <Route path="/register" component = { RegisterPage }/>
      <Route path="/login" component = { LoginPage }/>
      <Route path="/bucket" component = {bucketPage}/>
      <Route path="/bucket/:bucket_id/items" component ={ItemsPage}/>
    </Router>
)