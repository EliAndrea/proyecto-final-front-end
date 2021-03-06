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
					user: {},
					date: new Date()
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
						localStorage.setItem('token', newUser.token);
						localStorage.setItem('admin', newUser.is_staff);
						localStorage.setItem('isAuthenticated', newUser.is_authenticated);
						localStorage.setItem('name', newUser.first_name + " " + newUser.last_name)
						let models = this.state.models;
						models.user = newUser;
						this.setState({models: models});
					},
					dateUpdate: (date) => {
						let date1 =this.state.models;
						date1.date = date;
						this.setState({models: date1});
					}
				}
		};
	}
	render(){
		return(
			<Context.Provider value={this.state}>
        		{this.props.children}
			</Context.Provider>
		);
	}
}

export default ThemeProvider;