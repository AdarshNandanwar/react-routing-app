import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import ItemDetail from './ItemDetail';
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    // Required for React Routing
    <Router>
      <div className="App">
        <Nav />
        {/* Switch renders only one compponent. i.e. the first one that matches the path */}
        {/* Otherwise if path attribute is a part of url, then react will render the component. */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={ItemDetail} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
    <img id="pokeballImg" src="http://pngimg.com/uploads/pokeball/pokeball_PNG11.png" alt="" />
  </div>
)

export default App;
