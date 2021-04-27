import React from 'react';
import heroes from '../../store/store';

const List = () => {
  const functionExample = () => {
    console.log('HEROE CLICKED');
  };
  const myHereos = heroes.map(({ id, name }) => (
    <li className="list__item" key={`${id} - ${name}`}>
      <button type="button" onClick={() => functionExample()}>
        {id}
        {' - '}
        {name}
      </button>
    </li>
  ));

  return (
    <div>
      <ul className="list__conatiner">
        {myHereos}
      </ul>
    </div>
  );
};
export default List;
