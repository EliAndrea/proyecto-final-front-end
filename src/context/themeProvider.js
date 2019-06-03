import React from "react";

export const Context = React.createContext({});

class ThemeProvider extends React.Component{
	constructor(){
		super();
		this.state = {
			models: 
				{
					workersList: [],
					shiftsTypes: [],
					positions: [],
					showAlert: false,
					user: {}
				},
			actions:
				{
					updateWorkersList: () =>{
						fetch("http://127.0.0.1:8000/api/users/",
						{
							method: "GET",
							headers: {
								"Content-Type": "application/json",
								"Authorization": "Token " + localStorage.getItem('token')
							}
						})
							.then((response) => {
	            				return response.json();
	            				})
	        				.then((responseJSON) => {
	        					let models = this.state.models;
								models.workersList = responseJSON;
								this.setState({models: models});
	            				});
					},
					updateShiftsTypes: () => {
						fetch("http://127.0.0.1:8000/api/shifts-types/",
						{
							method: "GET",
							headers: {
								"Content-Type": "application/json",
								"Authorization": "Token " + localStorage.getItem('token')
							}
						})
							.then((response) => {
								return response.json();
								})
							.then((responseJSON) => {
								let models = this.state.models;
								models.shiftsTypes = responseJSON;
								this.setState({models: models});
								});
						
					},
					updatePositions: () => {
						fetch("http://127.0.0.1:8000/api/positions/",
						{
							method: "GET",
							headers: {
								"Content-Type": "application/json",
								"Authorization": "Token " + localStorage.getItem('token')
							}
						})
							.then((response) => {
								return response.json();
								})
							.then((responseJSON) => {
								let models = this.state.models;
								models.positions = responseJSON;
								this.setState({models: models});
								});

					},
					saveUser: (newUser) => {
						let models = this.state.models;
						models.user = newUser;
						this.setState({models: models});
						localStorage.setItem('token', newUser.token);
						localStorage.setItem('admin', newUser.is_staff);
					}
				}
		};
	}
	/*componentDidMount(){
	getWorkersList = () => {
		fetch("https://3000-ba1b8683-b649-4439-93c8-37c62bff3b47.ws-us0.gitpod.io/api/users/")
			.then((response) => {
	            return response.json();
	            })
	        .then((responseJSON) => {
	            this.state.actions.updateWorkersList(responseJSON);
	            });
	}
	getShiftsTypes = () => {
		fetch("https://3000-ba1b8683-b649-4439-93c8-37c62bff3b47.ws-us0.gitpod.io/api/shift-types/")
			.then((response) => {
				return response.json();
			})
			.then((responseJSON) => {
				this.state.actions.updateShiftsTypes(responseJSON);
			});
	}
	getPositions = () => {
		fetch("https://3000-ba1b8683-b649-4439-93c8-37c62bff3b47.ws-us0.gitpod.io/api/positions/")
			.then((response) => {
				return response.json();
			})
			.then((responseJSON) => {
				this.state.actions.updatePositions(responseJSON);
			});
	}*/
	
	render(){
		console.log(this.state.models.user.token);
		return(
			<Context.Provider value={this.state}>
        		{this.props.children}
			</Context.Provider>
		);
	}
}

export default ThemeProvider;