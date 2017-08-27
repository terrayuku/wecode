import React, {Component} from 'react';
import fire from '../config';

class CaseStudy extends Component {

	constructor(props) {
		super(props);
		this.state = {
			email: "terra@byte.com",
			casestudy: "",
			categories: ['Please Select Category', 'Education', 'UnEmployment', 'Abuse'],
			category: '',
			error: '',
			quize: false,
			q1: '',
			q2: '',
			q3: '',
			pass: '',
			casestudies: []
		};
	}

	componentWillMount() {
		let usersPostsRef = fire.database().ref('casestudies');
		usersPostsRef.on('child_added', snap => {
			let casestudy = { casestudy: snap.val(), id: snap.key};
			this.setState({ casestudies: [casestudy].concat(this.state.casestudies) });
		})
	}

	handleEmail(e) {
		this.setState({ email: e.target.value })
	}
	handleCaseStudy(e) {
		this.setState({ casestudy: e.target.value })
	}

	handleCategory(e) {
		this.setState({ category: e.target.value })
	}
	handleQ1(e) {
		this.setState({ q1: e.target.value })
	}
	handleQ2(e) {
		this.setState({ q2: e.target.value })
	}
	handleQ3(e) {
		this.setState({ q3: e.target.value })
	}

	takeQuiz(e) {
		e.preventDefault();
		this.setState({ quize: true });
		console.log(this.state.quize);
	}

	submitQuiz(e) {
		e.preventDefault();
		// let answers = {
		// 	'casestudy': this.state.casestudy,
		// 	'q1': this.state.q1,
		// 	'q2': this.state.q1,
		// 	'q3': this.state.q1
		// };
		this.setState({pass: "You Have Passed, Your Mentor Will be in touch! And You Gained 5 Points"});
		// let ans = fire.database().ref('casestudies/educationAnswers');

		// ans.push(answers).then(result => {
		// 	console.log("Answered");
		// }).catch(error => {
		// 	console.log("Error");
		// })
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log(this.state.email, this.state.post);

		let post = {
			'email': this.state.email,
			'casestudy': this.state.casestudy,
			'category': this.state.category
		};

		let postRef = fire.database().ref('casestudies');

		postRef.push(post).then(result => {
			console.log("Posted");
		}).catch(error => {
			console.log("Error");
		});

	}

	render() {
		return (
			<div>
			 <div className="container">
		        <div className="row">
		        	<div className="col-lg-4">
		        		<h5>CaseStudy</h5>
		        		
		        		<ul>
		        			{
		        				this.state.casestudies.map( casestudy => 
		        					<li key={casestudy.id}><span className="section-heading text-muted">
		        					{casestudy.casestudy.email}-{casestudy.casestudy.category}:
		        					</span> {casestudy.casestudy.casestudy}</li>
		        				)
		        			}
		        			<br />
		        			{ this.state.takeQuiz ? 
		        				<form onSubmit={this.takeQuiz.bind(this)}>
			        				<span className="section-heading text-muted">As to Confirm That You Want to Take Quize,<br />
			        				<strong>Please Click Twice.</strong></span>
			        				<input type="submit" className='btn btn-primary' 
			        				value="Take Quize"  />

		        				</form>
		        				: 
		        				!this.state.pass ?
		        				<form onSubmit={this.submitQuiz.bind(this)}>
		        					<label>Education is Key?</label><br />
			        				<input type='radio' value={this.state.q1} onChange={this.handleQ1.bind(this)}/>
			        				<label>True</label>
			        				<input type='radio' value={this.state.q1} onChange={this.handleQ1.bind(this)}/><label>False</label>

			        				<label>Education Can Facilitate Learning?</label><br />
			        				<input type='radio' value={this.state.q2} onChange={this.handleQ2.bind(this)}/><label>True</label>
			        				<input type='radio' value={this.state.q2} onChange={this.handleQ2.bind(this)}/><label>False</label>

			        				<label>Education include Sleeping Early?</label><br />
			        				<input type='radio' value={this.state.q3} onChange={this.handleQ3.bind(this)}/><label>True</label>
			        				<input type='radio' value={this.state.q3} onChange={this.handleQ3.bind(this)}/><label>False</label><br />

			        				<input type="submit" className='btn btn-primary' 
			        				value="Submit Quiz"  />

		        				</form>
		        				:
		        				<p>{this.state.pass}</p>

		        			}
		        		</ul>
		        			
		        	</div>
		          <div className="col-lg-8 text-center">
		          <div className="form-group">
				<h2 className="section-heading">MemeZA</h2>
			        <form onSubmit={this.handleSubmit.bind(this)} >

			            <label>{this.state.email}</label><br /><label>Mentor NMV: Sport & Life Coach</label><br />
			            <select onChange={this.handleCategory.bind(this)} className="form-control" >
			            	{
			            		this.state.categories.map(c => <option className="form-control" value={c}>{c}</option> )
			            	}
			            </select>
			            <br />
			            <input type="text" placeholder="Add a short intuitive case study" className="form-control" 
			            onChange={this.handleCaseStudy.bind(this)} required /><br />

			           	 
			        <br /><input className="btn btn-primary" type="Submit" value="Add Case Study" />
			            
			        </form>
			        </div>
			</div>
			</div>
			</div>
			</div>
		);
	}
}

export default CaseStudy;