import React from 'react';

// Global styles
import './App.scss';

// Global components
import Header from './components/Header';

// Pages
import Main from './pages/main';

const App = () => (
  <div className="App">
    <Header />
    <Main />
  </div>
);

export default App;
