import React, {Component} from 'react';
import fire from '../config';


class Profile extends Component {

	constructor(props) {
		super(props);

		this.state = {
			firstName: "Terra",
			lastName: "Byte",
			email: "terra@byte.com",
			password: "1234567"
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

	handleSubmit(e) {
		e.preventDefault();
		console.log(this.state.firstName, this.state.lastName,
			this.state.email, this.state.password, this.state.gender);

		let user = {
			firstName: this.state.firstName, 
			lastName: this.state.lastName,
			email: this.state.email, 
			password: this.state.password,
			gender: this.state.gender
		};

		let newUserRef = fire.database().ref("users");

		newUserRef.push(user).then(result => {

			console.log("User Added");
			fire.auth().createUserWithEmailAndPassword(this.state.email, 
				this.state.password).then(result => {

					console.log(result);
					this.setState({ result: result });

				}).catch(error => {

					console.log("Email Error", error);

				});
			
		}).catch( error => {
			console.log("User Error", error);
			this.setState({error: error});
		});
	}

	render() {
		return (
			    
			          <div className="container">
			            <div className="row">
			              <div className="col-lg-8 mx-auto">
			                <div className="modal-body">
			                  <h2>{this.state.firstName} {this.state.lastName}</h2>
			                  <p className="item-intro text-muted"></p>
			                  <img className="mx-auto rounded-circle" 
			                  src="img/team/1.jpg" alt="" />
			                  <p>User brief description </p>
			                  <div className="container">
		        <div className="row">
		          <div className="col-lg-12 text-center">
		          <div className="form-group">
			        <form onSubmit={this.handleSubmit.bind(this)} >

			            <input type="text" value={this.state.firstName} className="form-control"
			            onChange={this.handleFirstName.bind(this)} required /><br />

			            <input type="text" value={this.state.lastName} className="form-control" 
			            onChange={this.handleLastName.bind(this)} required /><br />

			            <input type="email" value={this.state.email} className="form-control" 
			            onChange={this.handleEmail.bind(this)} required /><br />

			            
			           	 
			        <br /><input className="btn btn-primary" type="Submit" value="Update" />
			            
			        </form>
			        </div>
			</div>
			</div>
			</div>
			                  <button className="btn btn-primary" data-dismiss="modal" type="button">
			                    <i className="fa fa-times"></i>
			                    Close Profile</button>
			                </div>
			              </div>
			            </div>
			          </div>
		);
	}
}

export default Profile;