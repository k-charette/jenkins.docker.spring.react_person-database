import React, {Component} from 'react';
import './App.css';
import Customers from './components/customers/customers';
import CustomerForm from './components/customer-form/customer-form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
<<<<<<< HEAD
          <a href="http://localhost:9090/h2-console/">View Database</a>
=======
          <a href="http://localhost:8079/h2-console/">View Database</a>
>>>>>>> 8358444e3c7b5e323a0ee6ea0ca427e7b7d44ea2
          <CustomerForm/>
          <Customers/>
        </header>
      </div>
    );
  }
}
export default App;
