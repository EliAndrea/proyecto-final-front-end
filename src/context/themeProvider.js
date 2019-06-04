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
						let models = this.state.models;
						models.user = newUser;
						this.setState({models: models});
						localStorage.setItem('token', newUser.token);
						localStorage.setItem('admin', newUser.is_staff);
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
		localStorage.setItem('token', "1e5ddbcf8b953f03c6cfa892384249ed43c1f31c");
		localStorage.setItem('admin', true);
		return(
			<Context.Provider value={this.state}>
        		{this.props.children}
			</Context.Provider>
		);
	}
}

export default ThemeProvider;