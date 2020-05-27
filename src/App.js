import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";

import LandingPage from "./views/Landing/LandingPage";
function App() {
  return (
    <div className="App">
      <Router>
     <LandingPage/>
     </Router>
    </div>
  );
}

export default App;
