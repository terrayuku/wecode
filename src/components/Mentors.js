import React, { Component } from 'react';

class Mentors extends Component {
	render() {
		return (
    <section className="bg-light" id="mentors">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">1 : 1 Mentoring Through Personal Planing</h2>
            <h3 className="section-subheading text-muted">Once registered as a member, you get to plan your goals and assign a mentor for your goals and the App reminds you daily.</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="team-member">
              <img className="mx-auto rounded-circle" 
              src="img/team/1.jpg" alt="" />
              <h4>Kay Garland</h4>
              <p className="text-muted">Mentor</p>
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
          <div className="col-sm-4">
            <div className="team-member">
              <img className="mx-auto rounded-circle" 
              src="img/team/2.jpg" alt="" />
              <h4>Larry Parker</h4>
              <p className="text-muted">Activist</p>
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
          <div className="col-sm-4">
            <div className="team-member">
              <img className="mx-auto rounded-circle" 
              src="img/team/3.jpg" alt="" />
              <h4>Diana Pertersen</h4>
              <p className="text-muted">Social Worker</p>
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
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <p className="large text-muted">Responsibility of a mentor is to help you grow and manage your task. Also help you grow, personaly and profentionaly.</p>
          </div>
        </div>
      </div>
    </section>
		);
	}
}

export default Mentors;