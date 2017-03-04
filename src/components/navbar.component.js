import React from 'react'

export default class Navbar extends React.Component{

	constructor(props){
		super(props);
	}

	handleChange=(event)=> {
        console.log("successfull");
	}

	render(){

		return(
            <nav class="navbar navbar-inverse">
              <div class="container-fluid">
                <div class="navbar-header">
                  <a class="navbar-brand" href="#">MoneyTracker</a>
                </div>
                <ul class="nav navbar-nav">
                  <li class="active"><a href="#">Home</a></li>
                  <li><a href="#">My profile</a></li>
                  <li><a href="#">About</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                  <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                  <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                </ul>
              </div>
            </nav>
		);
	}
}
