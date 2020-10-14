import React from 'react';

import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';

function App() {
  return (
    <div>
      <Navbar
      left_text="Login"
      right_text="Sign Up"
      left_url="/login"
      right_url="/signup"
      />
      <Jumbotron />
    </div>
  );
}

export default App;
