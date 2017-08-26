import React, {Component} from 'react';
import fire from '../config';

class AddGroup extends Component {

	constructor(props) {
		super(props);
		this.state = {
			groupName: "",
			location: "",
			email: "",
			phone: "",
			description: "",
			error: ''
		};
	}

	handleGroupName(e) {
		this.setState({ groupName: e.target.value})
	}
	handleLocation(e) {
		this.setState({ location: e.target.value })
	}
	handleEmail(e) {
		this.setState({ email: e.target.value })
	}
	handlePhone(e) {
		this.setState({ phone: e.target.value })
	}

	handleDescription(e) {
		this.setState({ description: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log(this.state.groupName, this.state.location,
			this.state.email, this.state.description, this.state.phone);

		let user = {
			firstName: this.state.firstName, 
			lastName: this.state.lastName,
			email: this.state.email,
			phone: this.state.phone,
			description: this.state.description
		};

		let newUserRef = fire.database().ref("groups");

		newUserRef.push(user).then(result => {

			console.log("Group Added");
			console.log(result);
			this.setState({ result: result });
			
			
		}).catch( error => {
			console.log("Group Error", error);
			this.setState({error: error});
		});
	}

	render() {
		return (
			<div>
			 <div className="container">
		        <div className="row">
		          <div className="col-lg-12 text-center">
		          <div className="form-group">
				<h2 className="section-heading">Add Group</h2>
			        <form onSubmit={this.handleSubmit.bind(this)} >

			            <input type="text" placeholder="Group Name" className="form-control" 
			            onChange={this.handleGroupName.bind(this)} required /><br />

			            <input type="email" placeholder="Email" className="form-control" 
			            onChange={this.handleEmail.bind(this)} required /><br />

			            <input type="number" placeholder="Phone" className="form-control" 
			            onChange={this.handlePhone.bind(this)} required /><br />

			            <input type="text" placeholder="Description" className="form-control" 
			            onChange={this.handleDescription.bind(this)} required /><br />
			           	 
			        <br /><input className="btn btn-primary" type="Submit" value="Add Group" />
			            
			        </form>
			        </div>
			</div>
			</div>
			</div>
			</div>
		);
	}
}

export default AddGroup;