import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Doctors from '../components/Doctors'
import Navbar from "../components/Navbar"
import Home from '../components/Home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// import ReviewsList from '../components/Reviews'
// import UsersList from '../components/Users'
// import { render } from '@testing-library/react';

class App extends Component {
  state = {
   doctorsList: [],
   reviewsList: [],
   usersList: [],
  };
  componentDidMount() {
    return (
      fetch('http://localhost:3000/doctors')
      .then(resp => resp.json())
      .then(json => {
        debugger
        const reviews = []
        const doctors = json.data.map(docObj => {
          reviews.push(docObj.reviews.flat())
          return {name: docObj.name, firstName: docObj.first_name, lastName: docObj.last_name, address: docObj.address, id: docObj.id} 
        })
        this.setState({
          doctorsList: doctors,
          reviewsList: reviews
        })
      })
      .catch(err => console.error(err))
    )}
       
    
  
  render() {
  return (
    <>
     
    <div className="navbar">
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} /> 
        <Route path="/doctors" render={(props) => <Doctors doctorsList={this.state.doctorsList} routeProps={props} /> }/>
        {/* <Route path="/logon" component={Logon}/> 
        <Route path="/signup" component={Signup}/>
        <Route path="/logoff" component={Logoff}/> */}
      </Switch>
    </Router>
  </div>
  </>
  );
}
}

export default App;
