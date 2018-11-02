import React from 'react';

import FruitBasket from './FruitBasket';

//const App = () => <FruitBasket />;
class App extends React.Component {
	constructor() {
		super()

		this.state = {
		 filters: [],
		 fruit: [],
		 currentFilter: null
		}
	}

	fetchFilters = () => {
	    fetch('/api/fruit_types')
	      .then(response => response.json())
	      .then(filters => this.setState({ filters }));
	}

	fetchFruits = () => {
	    fetch('/api/fruit')
      	      .then(response => response.json())
      	      .then(fruit => this.setState({ fruit }));
	}

	changeFilter = (event) => {
		// change filter here
		this.setState({
		  currentFilter: event.target.value		
		})
	}

	componentDidMount() {
		this.fetchFilters()
		this.fetchFruits()
	}

	render() {
		return (
			<FruitBasket 
			  updateFilterCallback = {this.changeFilter}
			  currentFilter = {this.state.currentFilter}
			  filters = {this.state.filters}
			  fruit = {this.state.fruit}
			/>
		)
	}
}

export default App;
