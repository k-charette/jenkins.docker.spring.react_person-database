import React, {Component} from 'react';
import './App.css';
import Customers from './components/customers/customers';
import CustomerForm from './components/customer-form/customer-form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a href="http://localhost:9090/h2-console/">View Database</a>
          <CustomerForm/>
          <Customers/>
        </header>
      </div>
    );
  }
}
export default App;
