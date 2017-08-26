import React, {Component} from 'react';
import fire from '../config';

class Signup extends Component {

	constructor(props) {
		super(props);
		this.state = {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			confirmPassword: "",
			gender: ["Male", "Female", "Other"],
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
	handlePassword(e) {
		this.setState({ password: e.target.value })
	}
	handleConfirm(e) {
		this.setState({ confirmPassword: e.target.value })
	}
	handleGender(e) {
		this.setState({ gender: e.target.value })
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
			<div>
			 <div className="container">
		        <div className="row">
		          <div className="col-lg-12 text-center">
		          <div className="form-group">
				<h2 className="section-heading">SIGN UP HERE</h2>
			        <form onSubmit={this.handleSubmit.bind(this)} >

			            <input type="text" placeholder="Firstname" className="form-control"
			            onChange={this.handleFirstName.bind(this)} required /><br />

			            <input type="text" placeholder="Lastname" className="form-control" 
			            onChange={this.handleLastName.bind(this)} required /><br />

			            <input type="email" placeholder="Email" className="form-control" 
			            onChange={this.handleEmail.bind(this)} required /><br />

			            <input type="password" placeholder="Password" className="form-control" 
			            onChange={this.handlePassword.bind(this)} required /><br />

			            <input type="password" placeholder="Confirm password" className="form-control" 
			            onChange={this.handleConfirm.bind(this)} required /> <br />
			           	 
			        <br /><input className="btn btn-primary" type="Submit" value="Signup" />
			            
			        </form>
			        </div>
			</div>
			</div>
			</div>
			</div>
		);
	}
}

export default Signup;