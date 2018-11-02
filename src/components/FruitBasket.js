import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props) => {
	const {updateFilterCallback, filters, currentFilter, fruit} = props

	return	(
	     <div className="fruit-basket">
		<Filter handleChange={updateFilterCallback} filters={filters}/>
		<FilteredFruitList
		  filter={currentFilter} 
		  items={fruit}
		/>
	      </div>
	)
}

export default FruitBasket;
