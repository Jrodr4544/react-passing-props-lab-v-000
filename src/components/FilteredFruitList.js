import React from 'react';

const FilteredFruitList = (props) => {
    const {filter, items} = props	
    const list = (!filter || filter === 'all') ? items : items.filter(item => item.fruit_type === filter);
//	debugger
    const listComponents = list.map((item, index) => <li key={index}>{item.char}</li>);

    return (
      <ul className="fruit-list">
	    {listComponents}
      </ul>
    )
}

FilteredFruitList.defaultProps = {
	fruit: '',
	filter: '',
	items: []
}

export default FilteredFruitList;
