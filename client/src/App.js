import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Products from './components/Products/Products';
import Expenses from './components/Expenses/Expenses';
import NewProduct from './components/NewProduct/NewProduct';
import Table from'./components/Table/Table';
import Header from './components/Header/Header';



class App extends Component{
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route path='/products' render={() => <Products header={Header} table={Table}/>} />
          <Route path='/expenses' render={() => <Expenses header={Header} table={Table}/>} />
          <Route path='/newproduct' render={() => <NewProduct header={Header} />} />
          <Route path='/edit-product' render={() => <NewProduct header={Header}/>} />
        </Switch>
      </Router>
    )
  }
}

export default App;
