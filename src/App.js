import logo from './logo.svg';
import './App.css';
import './customer/component/Navigation/Navigation'


import { Route, Routes } from 'react-router-dom';
import CustomerRouter from './Routers/CustomerRouter';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/*' element={<CustomerRouter></CustomerRouter>}></Route>
      </Routes>


    </div>
  );
}

export default App;
