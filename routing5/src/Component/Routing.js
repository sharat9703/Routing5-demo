import React from 'react';
import {BrowserRouter,Route,Router} from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Post from './Post';
import PostDetails from './PostDetails';
import Profile from './profile';
const Routing =()=>{
    return(
        <BrowserRouter>
        <Header/>
<div className='container'>
    <Route path='/' component={Home}/>
    <Route path='/post' component={Post}/>
    <Route path='/profile' component={Profile}/>
    <Route path='/postDetails' component={PostDetails}/> 
</div>
        <Footer/>
        </BrowserRouter>
    )
}

export default Routing;