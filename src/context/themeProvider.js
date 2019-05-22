import React from "react";

export const Context = React.createContext({});

class ThemeProvider extends React.Component{
	constructor(){
		super();
		this.state = {
			models: 
				{
					workersList: [],
				},
			actions:
				{
					updateWorkersList: (newModel) =>{
						let models = this.state.models;
						models.workersList = newModel;
						this.setState({models: models});
					}				
			    }
		};
	}
	componentDidMount(){
		this.getWorkersList();
	}
	getWorkersList = () => {
		fetch("https://3000-ba1b8683-b649-4439-93c8-37c62bff3b47.ws-us0.gitpod.io/api/users/")
			.then((response) => {
	            return response.json();
	            })
	        .then((responseJSON) => {
	            this.state.actions.updateWorkersList(responseJSON);
	            });
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

/*const Store = PassedComponent => {
	class StoreWrapper extends React.Component {
		constructor(props) {
			super(props);
			this.state = getState({
				getStore: () => this.state.store,
				setStore: updatedStore =>
					this.setState({
						store: Object.assign(this.state.store, updatedStore)
					})
			});
		}

		render() {
			return (
				<Context.Provider value={this.state}>
					<PassedComponent {...this.props} />
				</Context.Provider>
			);
		}
	}
	return StoreWrapper;
};

export default Store;*/
