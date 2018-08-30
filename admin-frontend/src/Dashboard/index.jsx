import React, {Component} from 'react';
import QuickLinks from './QuickLinks';
import Header from '../Header';
import Footer from '../Footer';
import {Route} from 'react-router-dom';
import Pages from './../Pages';
import Menus from './../Menus';

class Dashboard extends Component{
    render(){
        return(
            <div>
                <Header />
                <Route exact path='/admin' component={QuickLinks}/>
                <Route path='/admin/menus' component={Menus}/>
                <Route path='/admin/pages' component={Pages}/>
                <Footer />
            </div>    
        );
    }
}


export default Dashboard;


