import React from 'react';

const FilteredFruitList = ({fruit, filter}) => {
    //const {filter, items} = props	
    const fruits = (!filter || filter === 'all') ? fruit : fruit.filter(item => item.fruit_type === filter);
    const fruitComponents = fruits.map((item, index) => <li key={index}>{item.char}</li>);

    return (
      <ul className="fruit-list">
	    {fruitComponents}
      </ul>
    )
}

FilteredFruitList.defaultProps = {
	fruit: [],
	filter: null 
}

export default FilteredFruitList;
