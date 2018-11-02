import React, { Component } from 'react';

const FilteredFruitList = (props) => {
    const {filter, items} = props	
    const list = (!filter || filter === 'all') ? items : items.filter(i => i.fruit_type === filter);
    const listComponents = list.map((item, index) => <li key={index}>{item.char}</li>);

    return (
      <ul className="fruit-list">
	    {listComponents}
      </ul>
    )
}

export default FilteredFruitList;
