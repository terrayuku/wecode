import React, {Component} from 'react';

class Header extends Component {
	render() {
		return(
			<header className="masthead">
		      <div className="container">
		        <div className="intro-text">
		          <div className="intro-lead-in">Connecting Youth Organizations All Over!</div>
		          <div className="intro-heading">It's Nice To Meet You</div>
		          <a className="btn btn-xl js-scroll-trigger" href="#stories">Catch In</a>
		        </div>
		      </div>
		    </header>
		);
	}
}

export default Header;