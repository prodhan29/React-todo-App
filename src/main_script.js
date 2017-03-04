"use strict"

import React from 'react';
import ReactDom from 'react-dom';
import Task from './components/Task.component.js';
import Sidebar from './components/sidebar.component.js';
import Navbar from './components/navbar.component.js';
import Expenses from './components/expenses.component.js';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){

        return(
            <div>
                <Navbar></Navbar>

                <div className = "container">
                    <div className = "col-sm-4">
                        <Sidebar></Sidebar>
                    </div>
                    <div className = "col-sm-8">
                        <div className ="row">
                            <div className ="col-xs-6">
                                <h3> Expense Summary </h3>
                            </div>
                            <div className ="col-xs-6 expense-header">
                                <button className ="btn btn-success pull-right"> Add Expense</button>
                            </div>

                        </div>

                        <Expenses></Expenses>
                    </div>

                </div>
            </div>
        )
    }
}

ReactDom.render( <App />, document.getElementById('App'));
