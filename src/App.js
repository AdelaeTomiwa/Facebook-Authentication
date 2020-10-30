import React from 'react';
import Facebook from './components/Facebook';
import './App.css';

function App() {
   return (
      <div className='App'>
         <header className='App-header'>
            <h1>Facebook Auth Example</h1>
            <p>To Get Started, authenticate with facebook</p>
            <Facebook />
         </header>
      </div>
   );
}

export default App;
