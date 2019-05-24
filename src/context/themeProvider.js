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
				},
			actions:
				{
					updateWorkersList: () =>{
						fetch("https://3000-ba1b8683-b649-4439-93c8-37c62bff3b47.ws-us0.gitpod.io/api/users/")
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
						fetch("https://3000-ba1b8683-b649-4439-93c8-37c62bff3b47.ws-us0.gitpod.io/api/shifts-types/")
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
						fetch("https://3000-ba1b8683-b649-4439-93c8-37c62bff3b47.ws-us0.gitpod.io/api/positions/")
							.then((response) => {
								return response.json();
								})
							.then((responseJSON) => {
								let models = this.state.models;
								models.positions = responseJSON;
								this.setState({model: models});
								});

					},
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
		return(
			<Context.Provider value={this.state}>
        		{this.props.children}
			</Context.Provider>
		);
	}
}

export default ThemeProvider;