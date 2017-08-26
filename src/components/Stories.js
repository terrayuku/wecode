import React, { Component } from 'react';

class Stories extends Component {
	render() {
		return (
			<section id="stories">
		      <div className="container">
		        <div className="row">
		          <div className="col-lg-12 text-center">
		            <h2 className="section-heading">Stories</h2>
		            <h3 className="section-subheading text-muted">Its nice to connect with the right people.</h3>
		          </div>
		        </div>
		        <div className="row text-center">
		          <div className="col-md-4">
		            <span className="fa-stack fa-4x">
		              <i className="fa fa-circle fa-stack-2x text-primary"></i>
		              <i className="fa fa-book fa-stack-1x fa-inverse"></i>
		            </span>
		            <h4 className="service-heading">Education</h4>
		            <p className="text-muted">Education is the key. Help each other grow and success.</p>
		          </div>
		          <div className="col-md-4">
		            <span className="fa-stack fa-4x">
		              <i className="fa fa-circle fa-stack-2x text-primary"></i>
		              <i className="fa fa-money fa-stack-1x fa-inverse"></i>
		            </span>
		            <h4 className="service-heading">Un-Employment</h4>
		            <p className="text-muted">The rate of un-employment is high, join us as we unpack methods to assist bring down the un employment rate.</p>
		          </div>
		          <div className="col-md-4">
		            <span className="fa-stack fa-4x">
		              <i className="fa fa-circle fa-stack-2x text-primary"></i>
		              <i className="fa fa-child fa-stack-1x fa-inverse"></i>
		            </span>
		            <h4 className="service-heading">Abuse</h4>
		            <p className="text-muted">1 in 5 South African Citizen is being abused, being it a child, woman, or even man. Help eliminate these bad habits that affect the future of our country. </p>
		          </div>
		        </div>
		      </div>
		    </section>
		);
	}
}

export default Stories;