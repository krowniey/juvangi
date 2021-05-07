
import './App.css';
import styled from 'styled-components';

import Sidebar from './components/Sidebar';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './dashpages/Dashboard';
import Products from './prodpages/Products';
import Allproducts from './prodpages/Allproducts';
function App() {
  return (
    <Appstyle className="d-flex">
      <Router>
        <Sidebar />
        <Switch >
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/products" exact component={Products} />
          <Route path="/products/allproducts" exact component={Allproducts} />
        </Switch>
      </Router>
    </Appstyle>
  );
}
const Appstyle = styled.div`
height:100vh; !mportant;


`;
export default App;
