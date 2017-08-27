import React, { Component } from 'react';
import fire from '../config';
import Moment from 'react-moment';

// import twilio from 'twilio';
// var client = twilio('AC4ed252e33b5dcc402a7e8ace5db9de65', 'c4871b106ad7c0d4644dfa2f5b0ad8a7'); // +13345183089

class Planning extends Component {

	constructor(props) {


		// client.messages.create({ 
		//     to: "+13345183089", 
		//     from: "+27792989679", 
		//     body: "This is the ship that made the Kessel Run in fourteen parsecs?", 
		// }, function(err, message) { 
		//     console.log(message.sid); 
		// });

		super(props);
		// console.log(fire.auth().currentUser);
		this.state = {
			// displayName: fire.auth().currentUser.displayName
			goalDescription: '',
			startDate: '',
			endDate: '',
			intervals: ['Please Select Interval', 'Daily'],
			interval: '',
			milestoneOne: '',
			milestoneTwo: '',
			milestoneThree: '',
			milestoneFour: '',
			mentors: ["Please Select Mentor", "Terra: Mentor - Educational Knowledge Sharing", "Nomvuzo:  Mentor - Employment, Sport & Fitness",
			"Prim: Mentor - Abuse Activist & Life Coach"],
			mentor: '',
			error: '',
			plan: ''
		};
	}

	handleGoalDescription(e) {
		this.setState({ goalDescription: e.target.value });
	}
	handleStartDate(e) {
		this.setState({ startDate: e.target.value });
	}
	handleEndDate(e) {
		this.setState({ endDate: e.target.value });
	}
	handleInterval(e) {
		this.setState({ interval: e.target.value });
	}
	handleMilestoneOne(e) {
		this.setState({ milestoneOne: e.target.value });
	}
	handleMilestoneTwo(e) {
		this.setState({ milestoneTwo: e.target.value });
	}
	handleMilestoneThree(e) {
		this.setState({ milestoneThree: e.target.value });
	}
	handleMilestoneFour(e) {
		this.setState({ milestoneFour: e.target.value });
	}
	handleMentor(e) {
		this.setState({ mentor: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		let plan = {
			'goalDescription': this.state.goalDescription,
			'startDate': this.state.startDate,
			'endDate': this.state.endDate,
			'interval': this.state.interval,
			'milestones': [this.state.milestoneOne,this.state.milestoneTwo,
			this.state.milestoneThree,this.state.milestoneFour],
			'mentor': this.state.mentor
		};

		var userPlan = fire.database().ref('users/plans');
		userPlan.push(plan).then(result => {
			this.setState({ plan: result });
		}).catch(error => {
			this.setState({ error: error });
		});
	}
	render() {
		return (
		<div className="container">
		<div className="jumbotron">
			<div className="row">
	          <div className="col-lg-12 text-center">
				<div className="panel panel-primary">
					<div className="panel-heading"><h3 className="panel-title">Terra Byte</h3></div>
					<div className="panel-body">
						<div className="form-group">
							<form onSubmit={this.handleSubmit.bind(this)}>
								<label>Goal Description<span style={{ color: 'red' }}>*</span>  <span className="section-subheading text-muted">
								Please provide a short description of your goal. It is advisable to 
								provide objectives too.</span></label><textarea 
								onChange={this.handleGoalDescription.bind(this)} className="form-control" ></textarea> <br />
								<label>Start Date
								<span style={{ color: 'red' }}>*</span></label><input type="date" 
								className="form-control"  required onChange={this.handleStartDate.bind(this)}/><br />
								<label>End Date
								<span style={{ color: 'red' }}>*</span></label><input type="date" 
								className="form-control" required onChange={this.handleEndDate.bind(this)}/><br />
								<label>Reminding Interval<span style={{ color: 'red' }}>*</span> <span 
								className="section-subheading text-muted">
								App will remind you at 08:15 AM</span></label><br />
								<select className="form-control" onChange={this.handleInterval.bind(this)}>
							{
								this.state.intervals.map(i => 
								<option value={i} >{i}</option>
								)
							}
						</select><br />
								
								<hr />

								<h4>Goal Breakdown</h4>
								<span style={{ color: 'red' }}>*</span>
								<input type="text" className="form-control" 
								required placeholder="Milestone 1" onChange={this.handleMilestoneOne.bind(this)}/><br />
								<span style={{ color: 'red' }}>*</span>
								<input type="text" className="form-control" 
								required placeholder="Milestone 2" onChange={this.handleMilestoneTwo.bind(this)}/><br />
								<label className="section-subheading text-muted">Optional</label><input type="text"
								 className="form-control" placeholder="Milestone 3" onChange={this.handleMilestoneThree.bind(this)}/><br />
								<label className="section-subheading text-muted">Optional</label><input type="text" 
								className="form-control" placeholder="Milestone 4" onChange={this.handleMilestoneFour.bind(this)}/>
						
					
						Assign Mentor
						<select className="form-control" onChange={this.handleMentor.bind(this)}>
							{
								this.state.mentors.map(m => 
								<option value={m} >{m}</option>
								)
							}
						</select><br />

						{ this.state.startDate && this.state.endDate ? 
							<span className="section-subheading text-secondary">
							<h6>Expected Duration: <Moment from={this.state.startDate}>
							{this.state.endDate}</Moment></h6></span> : '' 
						}
						<input type="submit" className="btn btn-primary" value="Add Plan" />
						</form>
					</div>
					</div>
				</div>
				</div>
			</div>
			</div>
		</div>
		);
	}
}

export default Planning;