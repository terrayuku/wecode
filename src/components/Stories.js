import React, { Component } from 'react';
import fire from '../config';

class Stories extends Component {

	constructor(props) {
		super(props);
		this.state = {
			posts: []
		}
	}
	componentWillMount() {
		let usersPostsRef = fire.database().ref('posts');
		usersPostsRef.on('child_added', snap => {
			let post = { post: snap.val(), id: snap.key};
			this.setState({ posts: [post].concat(this.state.posts) });
		})
	}
	render() {
		console.log(this.state.posts)
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

		        	{
		        		this.state.posts.map( (post) => 
		        				post.post.category === 'Abuse' ? 
		        					<div className="col-md-4">
						            <span className="fa-stack fa-4x">
						              <i className="fa fa-circle fa-stack-2x text-primary"></i>
						              <i className="fa fa-child fa-stack-1x fa-inverse"></i>
						            </span>
						            <h4 className="service-heading">{post.post.category}</h4>
						            <p className="text-muted">{post.post.post}</p>
						          </div>

						        :
						        	post.post.category === 'UnEmployment' ? 
						        		<div className="col-md-4">
							            <span className="fa-stack fa-4x">
							              <i className="fa fa-circle fa-stack-2x text-primary"></i>
							              <i className="fa fa-money fa-stack-1x fa-inverse"></i>
							            </span>
							            <h4 className="service-heading">{post.post.category}</h4>
							            <p className="text-muted">{post.post.post}</p>
							          </div>
							        :

						        		<div className="col-md-4">
							            <span className="fa-stack fa-4x">
							              <i className="fa fa-circle fa-stack-2x text-primary"></i>
							              <i className="fa fa-amazon fa-stack-1x fa-inverse"></i>
							            </span>
							            <h4 className="service-heading">General</h4>
							            <p className="text-muted">{post.post.post}</p>
							          </div>
							     

		        			)
		        	}

		        </div>
		      </div>
		    </section>
		);
	}
}

export default Stories;