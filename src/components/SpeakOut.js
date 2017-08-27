import React, {Component} from 'react';
import fire from '../config';

class SpeakOut extends Component {

	constructor(props) {
		super(props);
		this.state = {
			email: "terra@byte.com",
			post: "",
			categories: ['Education', 'UnEmployment', 'Abuse'],
			category: '',
			error: '',
			posts: []
		};
	}

	componentWillMount() {
		let usersPostsRef = fire.database().ref('posts');
		usersPostsRef.on('child_added', snap => {
			let post = { post: snap.val(), id: snap.key};
			this.setState({ posts: [post].concat(this.state.posts) });
		})
	}

	handleEmail(e) {
		this.setState({ email: e.target.value })
	}
	handlePost(e) {
		this.setState({ post: e.target.value })
	}

	handleCategory(e) {
		this.setState({ category: e.target.value })
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log(this.state.email, this.state.post);

		let post = {
			'email': this.state.email,
			'post': this.state.post,
			'category': this.state.category
		};

		let postRef = fire.database().ref('posts');

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
		        		<h5>Voices</h5>
		        		<ul>
		        			{
		        				this.state.posts.map( post => 
		        					<li key={post.id}><span className="section-heading text-muted">
		        					{post.post.email}-{post.post.category}:</span> {post.post.post}</li>
		        				)
		        			}
		        		</ul>
		        	</div>
		          <div className="col-lg-8 text-center">
		          <div className="form-group">
				<h2 className="section-heading">MemeZA</h2>
			        <form onSubmit={this.handleSubmit.bind(this)} >

			            <label>{this.state.email}</label><br />
			            <select onChange={this.handleCategory.bind(this)}>
			            	{
			            		this.state.categories.map(c => <option value={c}>{c}</option> )
			            	}
			            </select>

			            <input type="text" placeholder="MemeZA and you will be heard..." className="form-control" 
			            onChange={this.handlePost.bind(this)} required /><br />

			           	 
			        <br /><input className="btn btn-primary" type="Submit" value="MemeZA" />
			            
			        </form>
			        </div>
			</div>
			</div>
			</div>
			</div>
		);
	}
}

export default SpeakOut;