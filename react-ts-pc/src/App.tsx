import React, { Component } from 'react';
import Login from './components/Login'
import './App.css';
interface IProps {
}
interface IState {
  name: string,
  phone?: number
}
class App extends Component <IProps, IState>{
  constructor(props: IProps) {
    super(props)
    this.state = {
      name: 'zuowang',
      phone: 12
    }
  }
  
  render() {
    return (
      <div>
        <Login {...this.state}></Login>
      </div>
    );
  }
}

export default App;
