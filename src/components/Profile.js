import React, {Component} from 'react';
import fire from '../config';

class Profile extends Component {

	constructor(props) {
		super(props);
		console.log(fire.auth().currentUser);
		this.state = {
			firstName: "",
			lastName: "",
			email: fire.auth().currentUser.email,
			youthgroup: "",
			phone: "",
			motivation: "",
			role: "",
			error: ''
		};
	}

	handleFirstName(e) {
		this.setState({ firstName: e.target.value})
	}
	handleLastName(e) {
		this.setState({ lastName: e.target.value })
	}
	handleEmail(e) {
		this.setState({ email: e.target.value })
	}
	handleYouthGroup(e) {
		this.setState({ youthgroup: e.target.value });
	}
	handlePhone(e) {
		this.setState({ phone: e.target.value })
	}
	handleMotivation(e) {
		this.setState({ motivation: e.target.value })
	}
	handleRole(e) {
		this.setState({ role: e.target.value })
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log(this.state.firstName, this.state.lastName, this.state.phone,
			this.state.email, this.state.role, this.state.youthgroup, this.state.motivation);
		let user = {
			'phoneNumber': this.state.phone,
			'firstName': this.state.firstName,
			'lastName': this.state.lastName,
			'youthgroup': this.state.youthgroup,
			'role': this.state.role,
			'motivation': this.state.motivation,
			'email': this.state.email
		}
		fire.database().ref('users').push(user);

		fire.auth().currentUser.updateProfile({
			displayName: this.state.firstName + " " + this.state.lastName,
			phoneNumber: this.state.phone,
			profile: user
		}).then(result => {
			this.setState({ isLogedIn: true });
		});
	}

	render() {
		return (
			<div>
			 <div className="container">
		        <div className="row">
		        <div className="col-lg-4">
		            <div className="team-member">
		              <img className="mx-auto rounded-circle" 
		              src="../img/team/1.jpg" alt="" />
		              <h4>{this.state.firstName}</h4><h5>{this.state.email}</h5>
		              <p className="text-muted">{this.state.role}</p>
		              <ul className="list-inline social-buttons">
		                <li className="list-inline-item">
		                  <a href="#">
		                    <i className="fa fa-twitter"></i>
		                  </a>
		                </li>
		                <li className="list-inline-item">
		                  <a href="#">
		                    <i className="fa fa-facebook"></i>
		                  </a>
		                </li>
		                <li className="list-inline-item">
		                  <a href="#">
		                    <i className="fa fa-linkedin"></i>
		                  </a>
		                </li>
		              </ul>
		            </div>
		            </div>
		          <div className="col-lg-8 text-center">
		          <div className="form-group">
				<h2 className="section-heading">Update Profile</h2>
			        <form onSubmit={this.handleSubmit.bind(this)} >

			            <input type="text" placeholder="Firstname" className="form-control"
			            onChange={this.handleFirstName.bind(this)}  /><br />

			            <input type="text" placeholder="Lastname" className="form-control" 
			            onChange={this.handleLastName.bind(this)}  /><br />

			            <input type="number" placeholder="Phone" className="form-control" 
			            onChange={this.handlePhone.bind(this)}  /><br />

			            <input type="text" placeholder="Role" className="form-control" 
			            onChange={this.handleRole.bind(this)}  /><br />

			            <input type="text" placeholder="Youth Group" className="form-control" 
			            onChange={this.handleYouthGroup.bind(this)}  /><br />

			            <input type="text" placeholder="Your Passion" className="form-control" 
			            onChange={this.handleMotivation.bind(this)}  /><br />
			           	 
			        <br /><input className="btn btn-primary" type="Submit" value="Update" />
			            
			        </form>
			        </div>
			</div>
			</div>
			</div>
			</div>
		);
	}
}

export default Profile;