import React, { Component } from "react";
import "./App.css";

class App extends Component {
	state = {
		users: [],
	};

	componentDidMount() {
		const xhr = new XMLHttpRequest();
		xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);

		// onload / addEventListener example
		// xhr.onload = () => {
		// 	if (xhr.status === 200) {
		// 		const users = JSON.parse(xhr.response);
		// 		this.setState({
		// 			users,
		// 		});
		// 	}
		// };

		xhr.addEventListener("load", () => {
			if (xhr.status === 200) {
				const users = JSON.parse(xhr.response);
				this.setState({
					users,
				});
			}
		});

		xhr.send(null);
	}
	render() {
		const users = this.state.users.map((user) => (
			<div key={user.id}>
				<h3>{user.name}</h3>
				<p>{user.address.city}</p>
				<p>{user.phone}</p>
			</div>
		));
		return <div className='App'>{users}</div>;
	}
}

export default App;
