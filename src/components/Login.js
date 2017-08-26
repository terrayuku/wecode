import React, { Component } from 'react';
import fire from '../config';

class Login extends Component {

	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
			error: '',
			isLogedIn: false
		};
	}

	handleEmail(e) {
		this.setState({ email: e.target.value });
	}

	handlePassword(e) {
		this.setState({ password: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		fire.auth().signInWithEmailAndPassword(this.state.email, 
			this.state.password).then(result => {
				console.log("User Logedin", result);
				this.setState({ isLogedIn: true });
			}).catch(error => {
				this.setState({ isLogedIn: false });
				console.log("Error Login", error);
			});

	}
	render() {
		console.log(this.state.isLogedIn);
		if(!this.state.isLogedIn) {
			return (

				<div className="container">
		        <div className="row">
		          <div className="col-lg-12 text-center">
				<form onSubmit={this.handleSubmit.bind(this)}>
					      <h2 className="section-heading"><a href="/login" id="loginform">Login</a> 
					      <a style={{marginLeft: "10px" }} href="/signup">Register</a></h2>
					    <div className="login">
					      <div className="arrow-up"></div>
					      <div className="formholder">
					        <div className="randompad">
					           <fieldset>
					             <input type="email" placeholder="Email" className="form-control" 
					             onChange={this.handleEmail.bind(this)} required /><br />
					             <input type="password" placeholder="Password" className="form-control" 
					             onChange={this.handlePassword.bind(this)} required/><br />
					             <input type="submit" className="btn btn-primary" value="Login" />
					 
					           </fieldset>
					        </div>
					      </div>
					    </div>
					    
				</form>
				</div>
				</div>
				</div>

			);
		} else {
			return (<p>Logedin</p>);
		}
	}
}

export default Login;