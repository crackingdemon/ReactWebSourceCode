import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './index.css';
import Home from './Home';
import About from './About';
import Footer from './Footer';
import Slider from './Slider';
import Contact from './Contact';
import Card from './Card';
import Navbar from './Navbar';
import Blog from './Blog';

import { Switch , Route ,Redirect } from "react-router-dom";
const App =() => {
    return(
        <>
        <Navbar/>
        <Slider/>
        <Card/>
        <Footer/>
        <switch>
            <Route exact path="/" component={Home}/>
            <Route exact  path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/blog" component={ Blog }/>
            <Redirect to="/"/>
        </switch>
        </>
    )
};
export default App;