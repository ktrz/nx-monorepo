import { myLib } from '@nx-monorepo/my-lib';
import React from 'react';

import './app.css';

import { ReactComponent as Logo } from './logo.svg';

export function App() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./app.css file.
   */
  return (
    <div className="app">
      <header className="flex">
        <Logo width="75" height="75" />
        <h1>Welcome to my-react-app!</h1>
      </header>
      <h2>This app is using {myLib()}</h2>
    </div>
  );
}

export default App;
