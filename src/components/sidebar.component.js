import React from 'react'

export default class Sidebar extends React.Component{

	constructor(props){
		super(props);
	}

	handleChange=(event)=> {
        console.log("successfull");
	}

	render(){

		return(
            <div className="sidebar">
                <div className="mini-submenu">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </div>
                <div className="list-group">
                    <span href="#" className="list-group-item active">
                        Submenu
                        <span className="pull-right" id="slide-submenu">
                            <i className="fa fa-times"></i>
                        </span>
                    </span>
                    <a href="#" className="list-group-item">
                        <i className="fa fa-comment-o"></i> Lorem ipsum
                    </a>
                    <a href="#" className="list-group-item">
                        <i className="fa fa-search"></i> Lorem ipsum
                    </a>
                    <a href="#" className="list-group-item">
                        <i className="fa fa-user"></i> Lorem ipsum
                    </a>
                    <a href="#" className="list-group-item">
                        <i className="fa fa-folder-open-o"></i> Lorem ipsum <span className="badge">14</span>
                    </a>
                    <a href="#" className="list-group-item">
                        <i className="fa fa-bar-chart-o"></i> Lorem ipsumr <span className="badge">14</span>
                    </a>
                    <a href="#" className="list-group-item">
                        <i className="fa fa-envelope"></i> Lorem ipsum
                    </a>
                </div>
            </div>
		);
	}
}
