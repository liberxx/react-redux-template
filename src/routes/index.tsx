import * as React from 'react';
import { Component } from 'react';
import { Route } from 'react-router';
import Main from '../pages/Main';
import About from '../pages/About';
import Contacts from '../pages/Contacts';
import Navigation from '../pages/Navigation'; 


export const Routes = () => (
    <div>
        <Route component={Navigation}/>
        <Route exact path='/' component={Main}/>
        <Route path='/about' component={About}/>
        <Route path='/contacts' component={Contacts}/>
    </div>
)