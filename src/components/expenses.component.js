import React from 'react'

export default class Expenses extends React.Component{

	constructor(props){
		super(props);
	}

	handleChange=(event)=> {
        console.log("successfull");
	}

	render(){

		return(
			<table class="table table-hover">
			    <thead>
			      <tr>
			        <th>Short Description</th>
			        <th>type</th>
			        <th>TK</th>
			      </tr>
			    </thead>
			    <tbody>
			      <tr>
			        <td>John</td>
			        <td>
	  			  		<span class="label label-danger  ">loan</span>
	  			  	</td>
			        <td>78 &#2547;</td>
			      </tr>
			      <tr>
			        <td>Mary</td>
			        <td>
  				  		<span class="label label-warning  ">transportation</span>
  				  	</td>
			        <td>100 &#2547;</td>
			      </tr>
			      <tr>
			        <td>July</td>
			        <td><span class="label label-success  ">food</span></td>
			        <td>500 &#2547;</td>
			      </tr>
			    </tbody>
			  </table>
		);
	}
}
