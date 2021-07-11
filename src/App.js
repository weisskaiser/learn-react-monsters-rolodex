import './App.css';
import React, { useCallback, useEffect, useState } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

const App = () => {

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users));
  }, []);

  const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
  const handleChange = useCallback(e => setSearchField(e.target.value), []);

  return (
    <div className="App">
      <h1> Monsters Rolodex </h1>
      <SearchBox
        placeholder="Search monsters"
        handleChange={handleChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  )

}

export default App;
