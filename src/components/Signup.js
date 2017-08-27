import React, {Component} from 'react';
import fire from '../config';

class Signup extends Component {

	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			confirmPassword: "",
			error: ''
		};
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
	handleSubmit(e) {
		e.preventDefault();
		console.log(this.state.email, this.state.password,);

		fire.auth().createUserWithEmailAndPassword(this.state.email, 
			this.state.password).then(result => {

				console.log(result);
				this.setState({ result: result });

			}).catch(error => {

				console.log("Email Error", error);

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