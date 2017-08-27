import React, {Component} from 'react';

class Nav extends Component {
	render() {
		return (
			
				<div className="container">
					<div className="row">
		        		<div className="col-lg-6">
		        			<Link to='/profile'>Profile</Link>
		        		</div>
		        		<div className="col-lg-6">
		        			<a href="/planning:{this.state.result}">Planing</a>
		        		</div>
		        	</div>
		        	<div className="row">
		        		<div className="col-lg-6">
		        			<a href="/stories:{this.state.result}">Stories</a>
		        		</div>
		        		<div className="col-lg-6">
		        			<a href="/speakout:{this.state.result}">SpeakOut</a>
		        		</div>
		        	</div>
				</div>
		);
	}
}

export default Nav;