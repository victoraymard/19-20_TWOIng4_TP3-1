import React from 'react';
import './App.css';
import Profile from'./Components/Profile.js'
import Publication from "./Components/Publication";

function App() {
  return (
    <container className="App">
      <header>
          <a href={'#'}>Jeanne</a>
          <a href={'#'}>Martine</a>
          <a href={'#'}>Claude</a>
      </header>

        <body>
            <Profile></Profile>

            <Publication></Publication>
        </body>
    </container>
  );
}

export default App;
