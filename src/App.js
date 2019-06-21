import React from 'react';

import { BrowserRouter as Router, Route, Link , NavLink ,Switch} from "react-router-dom";

import './App.css';

import Navbar from './components/Navbar';
import Error from './pages/error';
import Home from './pages/home';
import Rooms from './pages/rooms';
import SingleRoom from './pages/singleroom';
function App() {
  return (
     <React.Fragment>
     <Navbar/>
     <Switch>
      
       <Route exact path="/" component={Home} />
        <Route  exact path="/Rooms" component={Rooms} />
        <Route  exact path="/SingleRoom/:id" component={SingleRoom} />
         <Route  component={Error} />
              </Switch>
     </React.Fragment>
  );
}

export default App;