import React from 'react';

const List = ({ items, remove, toggle }) => (
  <ul>
    {items.map(item => (
      <li onClick={() => (toggle ? toggle(item.id) : null)} key={item.id}>
        <span style={{ textDecoration: item.complete ? 'line-through' : 'none' }}>{item.name}</span>
        <button type="button" onClick={() => remove(item)}>
          X
        </button>
      </li>
    ))}
  </ul>
);

export default List;
