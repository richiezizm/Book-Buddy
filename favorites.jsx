import React from 'react';
import {useState} from 'react';

function favorites() {
    const [favorites, setFavorites] = useState (
      {id: 1, name: 'Book 1'},
      {id: 2, name: 'Book 2'},
      {id: 3, name: 'Book 3'},
      {id: 4, name: 'Book 5'},
      {id: 6, name: 'Book 6'},
    );

    //added favorites above, now let's add a 
    // function below to remove them as well

    const removeFromFavorites = (id) => {
        setFavorites(favorites.filter(item => item.id));

    };
}

return (
    <div>
    <h1>Favorites List:</h1>
      <ul>
        <li key={item.id}>
          {item.name}
            <button onClick={()=> removeFromFavorites (item.id)}> Remove </button>
            </li>
        </ul>     
    </div>
);

//above return statement still looks a 
// little funky but can't spot what's wrong

export default favorites;


