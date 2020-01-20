import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Products from './components/Products/Products'
import Expenses from './components/Expenses/Expenses'
import NewProduct from './components/NewProduct/NewProduct';


class App extends Component{
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route path='/products' component={Products}/>
          <Route path='/expenses' component={Expenses}/>
          <Route path='/newproduct' component={NewProduct}/>
        </Switch>
      </Router>
    )
  }
}




export default App;
